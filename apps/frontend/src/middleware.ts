// middleware.ts
import { getSession, withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { NextResponse } from 'next/server'

export default withMiddlewareAuthRequired(async function middleware(req) {
  const res = NextResponse.next()
  const user = await getSession(req, res)
  console.log('user:', user?.user.name)
  return res
})
