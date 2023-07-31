import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {
  LoginRequestParams,
  LoginRequestResponse,
  SignUpRequestParams,
  SignUpRequestResponse
} from './auth.api.types';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.AUTH_BASE_URL + Config.AUTH_API_VERSION + '/auth'
  }),
  endpoints: builder => ({
    login: builder.mutation<LoginRequestResponse, LoginRequestParams>({
      query: body => ({
        url: '/log-in',
        method: 'POST',
        body
      })
    }),
    signUp: builder.mutation<SignUpRequestResponse, SignUpRequestParams>({
      query: body => ({
        url: '/sign-up',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation, useSignUpMutation } = authApi;

export default authApi;
