export type SignUpError = {
  status: number;
  data: {
    statusCode: number;
    message: string;
    error: string;
  };
};

export const isSignUpError = (error: any | unknown): error is SignUpError => {
  const castedError = error as SignUpError;
  return (
    castedError?.status !== undefined &&
    castedError?.data?.statusCode !== undefined &&
    castedError?.data?.message !== undefined &&
    castedError?.data?.error !== undefined
  );
};
