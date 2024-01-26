import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import getEnvVar from '@/lib/env-var'

export const { getClient } = registerApolloClient(() => {
  const envVar = getEnvVar()
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: envVar.graphqlEndpoint,
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjViNjAyZTBjYTFmNDdhOGViZmQxMTYwNGQ5Y2JmMDZmNGQ0NWY4MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9tb25pZGV2IiwiYXVkIjoidG9tb25pZGV2IiwiYXV0aF90aW1lIjoxNzA2Mjk5MzAyLCJ1c2VyX2lkIjoiNU94NWMwMTBZM2E1YVBhTFYzeFVoRGZPZUg4MiIsInN1YiI6IjVPeDVjMDEwWTNhNWFQYUxWM3hVaERmT2VIODIiLCJpYXQiOjE3MDYyOTkzMDIsImV4cCI6MTcwNjMwMjkwMiwiZW1haWwiOiJzYWt1cmFpLnl1a2kuZGV2ZWxvcEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzYWt1cmFpLnl1a2kuZGV2ZWxvcEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.aLLNKYUYfh3wFm-jZjKXZiZfoTG2Qu-ns6eMA1m5Mzr5X3P0mW-IeQsOaBp49OSCOqnlEcu4cdBuzahOE2sk-YII3h5_I3qz2d8Pzd7Hn-D2uNLWVtLCLZhFyrg0h4EFXwSARWKNTjfP5GVWYYlWrHxZplp1diW0Vg37Y6m7Lovad4q7_3SvGJWJ8CAgmqsKLj8kj61_S1WC1lVB1CNv9tVFdy2bUiz-pMZLb0wrWqdCx1kuwhjePGZb3A60_FLhqMfDe3tA80pX2QhG3ak7r2d_kGsq18-Cam22ZBLTD_AHTmEG4ofggHhe0dgr9eeD75BbwNhY9ulrVm-OCaw7AQ`,
      },
    }),
  })
})
