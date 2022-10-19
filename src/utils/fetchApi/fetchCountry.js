import axios from 'axios';
export const fetchCountry = async id => {
  const { data } = await axios.get(`/name/${id}`);
};
