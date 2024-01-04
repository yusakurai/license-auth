import { signInWithEmailAndPassword } from 'firebase/auth'
import { ResultAsync } from 'neverthrow'

import { authentication, firebaseError } from '../lib/index.js'

export namespace AuthRepository {
  export const signIn = async ({ email, password }: { email: string; password: string }) => {
    return ResultAsync.fromPromise(
      signInWithEmailAndPassword(authentication, email, password),
      (error) => firebaseError('ログインに失敗しました', error)
    ).andThen((userCredential) => {
      return ResultAsync.fromPromise(userCredential.user.getIdToken(), (error) =>
        firebaseError('アクセストークンの取得に失敗しました', error)
      )
    })
  }
}
