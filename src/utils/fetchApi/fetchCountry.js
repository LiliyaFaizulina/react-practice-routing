import axios from 'axios';
import { transformCountry } from 'helpers/transformCountry';

export const fetchCountry = async id => {
  const { data } = await axios.get(`/name/${id}`);
  const country = transformCountry(data);
  return country[0];
};
