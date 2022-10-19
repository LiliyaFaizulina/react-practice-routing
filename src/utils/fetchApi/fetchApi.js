import axios from 'axios';
import { transformData } from '../../helpers/transformData';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  const response = await axios('/region/europe');
  return transformData(response.data);
};
