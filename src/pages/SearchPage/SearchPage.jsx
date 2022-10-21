import { useFetchByRegion } from 'hooks/useFetchByRegion';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { CountriesList } from 'components/CountriesList/CountriesList';

export const SearchPage = () => {
  const { countries, isLoading, error, handleSubmit } = useFetchByRegion();

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {error && <p>Ooops! Something wrong</p>}
      {isLoading && <Loader />}
      {countries.length > 0 && <CountriesList countries={countries} />}
    </>
  );
};
