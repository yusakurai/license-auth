import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { cert, initializeApp } from 'firebase-admin/app'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fileName = process.env.FIREBASE_CREDENTIAL_FILE_NAME
const serviceAccount = readFileSync(
  join(__dirname, `../../../firebase/credential/${fileName}`),
  'utf8'
)

initializeApp({
  credential: cert(JSON.parse(serviceAccount)),
})

export { getFirestore } from 'firebase-admin/firestore'
export { getAuth } from 'firebase-admin/auth'
