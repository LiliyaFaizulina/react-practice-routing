import { useLocation, useNavigate } from 'react-router-dom';

export const CountryDetails = ({ country }) => {
  const { countryName, flag, capital, languages, population } = country;
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={() => navigation(location?.state.from || '/')}
      >
        Go back
      </button>
      <h2>Country: {countryName}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages: {languages}</p>
      <img src={flag} alt={countryName} />
    </>
  );
};
