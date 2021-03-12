import { useState, useEffect } from 'react';

type AsyncFn<T> = () => Promise<T>;

type UseAsyncResult<T> = {
  value: T | null;
  isLoading: boolean;
  error: Error | null;
};

export default function useAsync<T>(asyncFunction: AsyncFn<T>): UseAsyncResult<T> {
  const [value, setValue] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    asyncFunction()
      .then((data) => {
        setValue(data);
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [asyncFunction]);

  return {
    value,
    isLoading,
    error
  };
}
