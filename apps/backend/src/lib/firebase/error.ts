export const firebaseAuthError = (error: unknown, message?: string): Error => {
  return new Error(message ?? 'エラーが発生しました', { cause: error })
}
