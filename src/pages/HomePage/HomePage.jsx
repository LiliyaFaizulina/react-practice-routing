import { useFetchCountries } from 'hooks/useFetchCountries';
import { Loader } from 'components/Loader/Loader';
import { CountriesList } from 'components/CountriesList/CountriesList';

export const HomePage = () => {
  const { countries, error, isLoading } = useFetchCountries();
  return (
    <>
      {error && <p>Oops!</p>}
      {isLoading && <Loader />}
      {countries && <CountriesList countries={countries} />}
    </>
  );
};
