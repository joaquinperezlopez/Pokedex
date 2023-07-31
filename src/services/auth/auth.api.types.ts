export type LoginRequestParams = {
  email: string;
  password: string;
};

export type LoginRequestResponse = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

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
