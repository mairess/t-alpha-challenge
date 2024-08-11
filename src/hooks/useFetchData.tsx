/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { GetAllProductsSuccessType } from '../types';

type UseFetchDataProps = {
  url: string,
  token?: string | null,
  method?: string,
  body?: Record<string, any>,
  refresh: boolean;
};

const useFetchData = ({ url, token = null, method = 'POST', body = {}, refresh }: UseFetchDataProps) => {
  const [data, setData] = useState<GetAllProductsSuccessType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (token === null && method !== 'GET') {
        setError('Token expired or malformed!');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : 'Bearer bypPass',
          },
          body: method !== 'GET' ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token, method, JSON.stringify(body), refresh]);

  return { data, loading, error, setError, setLoading };
};

export default useFetchData;
