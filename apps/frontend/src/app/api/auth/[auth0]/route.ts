import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/',
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: 'signup',
    },
    returnTo: '/',
  }),
  logout: handleLogout({
    returnTo: '/',
  }),
})
