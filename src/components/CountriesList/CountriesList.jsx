import { Link } from 'react-router-dom';
export const CountriesList = ({ countries }) => {
  return (
    <ul>
      {countries.map(({ id, flag, country }) => (
        <li key={id}>
          <Link>
            <img src={flag} alt={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
