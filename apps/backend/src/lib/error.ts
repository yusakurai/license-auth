export const firebaseError = (message: string, error: unknown): Error => {
  return new Error(message, { cause: error })
}
