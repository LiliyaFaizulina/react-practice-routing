import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  const location = useLocation();
  return (
    <ul>
      {countries.map(({ id, flag, country }) => (
        <li key={id}>
          <Link to={`country/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
