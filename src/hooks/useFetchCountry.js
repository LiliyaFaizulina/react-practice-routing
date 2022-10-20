import { useState, useEffect } from 'react';
import { fetchCountry } from 'utils/fetchApi/fetchCountry';
import { useParams } from 'react-router-dom';

export const useFetchCountry = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(id)
      .then(setCountry)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  return { country, isLoading, error };
};
