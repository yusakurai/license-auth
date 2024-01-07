import { ok, ResultAsync } from 'neverthrow'

import { firebaseAuthError, getAuth } from '../lib/index.js'

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
   * トークンを検証する
   */
  export const verifyIdToken = (token: string): ResultAsync<string, Error> => {
    return ResultAsync.fromPromise(getAuth().verifyIdToken(token), (error) =>
      firebaseAuthError(error, 'トークンが無効です')
    ).andThen((decodedToken) => ok(decodedToken.uid))
  }
}
