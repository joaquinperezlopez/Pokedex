import LoadingIndicator from '@components/loading';
import React, { createContext, useState } from 'react';

export const LoadingContext = createContext<{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  loading: false,
  setLoading: () => {}
});

export const LoadingProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      <LoadingIndicator show={loading} />
    </LoadingContext.Provider>
  );
};
