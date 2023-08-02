import { Credentials } from '@models/auth/credentials.types';

export type LoginRequestParams = {
  email: string;
  password: string;
};

export type LoginRequestResponse = Credentials;

export type SignUpRequestParams = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type SignUpRequestResponse = {
  statusCode: number;
  message: string;
  error?: string;
};
