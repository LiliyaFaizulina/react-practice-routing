import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'utils/fetchApi/fetchByRegion';

export const useFetchByRegion = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true);
    fetchByRegion(searchQuery)
      .then(setCountries)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return { countries, isLoading, error, handleSubmit };
};
