import { signInWithEmailAndPassword } from 'firebase/auth'
import { ResultAsync } from 'neverthrow'

import { authentication, firebaseError } from '../lib/index.js'

type EmailAndPassword = {
  email: string
  password: string
}

export namespace AuthRepository {
  export const signIn = ({ email, password }: EmailAndPassword): ResultAsync<string, Error> => {
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
