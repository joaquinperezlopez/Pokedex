import { LoadingContext } from '@components/providers/LoadingProvider';
import { useContext, useEffect } from 'react';

const useGenericLoading = (newLoading: boolean) => {
  // get loading and setLoading from provider
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    // set loading to newLoading
    setLoading(newLoading);
  }, [newLoading, setLoading]);
};

export default useGenericLoading;
