import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import { errAsync, ok, ResultAsync } from 'neverthrow'

import { firebaseAuthError, getAuth } from '../lib/index.js'

import type { JwtPayload } from 'jsonwebtoken'

type UpdateAccountResult = {
  uid: string
  email: string
}

type CreateAccountResult = UpdateAccountResult

export namespace AuthRepository {
  /**
   * 認証アカウントを作成する
   */
  export const createAccount = ({
    email,
    password,
  }: {
    email: string
    password: string
  }): ResultAsync<CreateAccountResult, Error> => {
    return ResultAsync.fromPromise(getAuth().createUser({ email, password }), (error) =>
      firebaseAuthError(error, 'アカウント作成に失敗しました')
    ).andThen((userRecord) =>
      ok({
        uid: userRecord.uid,
        email: userRecord.email!,
      })
    )
  }

  /**
   * 認証アカウントを更新する
   */
  export const updateAccount = ({
    uid,
    email,
    password,
  }: {
    uid: string
    email: string
    password: string
  }): ResultAsync<UpdateAccountResult, Error> => {
    return ResultAsync.fromPromise(getAuth().updateUser(uid, { email, password }), (error) =>
      firebaseAuthError(error, 'アカウント更新に失敗しました')
    ).andThen((userRecord) =>
      ok({
        uid: userRecord.uid,
        email: userRecord.email!,
      })
    )
  }

  /**
   * JWT署名用の公開鍵を取得する
   */
  const _getPublicKey = (accessToken: string): ResultAsync<string, Error> => {
    // const { auth0JwksUrl } = getEnvVar()
    const auth0JwksUrl = process.env.AUTH0_JWKS_URL

    // JWTをデコードして、公開鍵用のkidを取得
    const decoded = jwt.decode(accessToken, { complete: true })

    if (!decoded) {
      return errAsync(new Error('JWTのデコードに失敗しました'))
    }

    // JWT署名用の公開鍵の取得
    const client = jwksClient({ jwksUri: auth0JwksUrl })

    return ResultAsync.fromPromise(
      client.getSigningKey(decoded.header.kid),
      () => new Error('jwkの取得に失敗しました')
    ).andThen((key) => ok(key.getPublicKey()))
  }

  /**
   * アクセストークンを検証する
   */
  export const verifyToken = (accessToken: string): ResultAsync<JwtPayload, Error> => {
    return _getPublicKey(accessToken).andThen((publicKey) => {
      // const { auth0Audience, auth0Issuer } = getEnvVar()
      const auth0Audience = process.env.AUTH0_AUDIENCE
      const auth0Issuer = process.env.AUTH0_ISSUER

      try {
        const payload = jwt.verify(accessToken, publicKey, {
          audience: auth0Audience,
          issuer: auth0Issuer,
        }) as JwtPayload
        return ok(payload)
      } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
          return errAsync(new Error('不正なトークンです'))
        }

        if (error instanceof jwt.TokenExpiredError) {
          return errAsync(new Error('トークンの有効期限が切れています'))
        }
        return errAsync(error as Error)
      }
    })
  }
}
