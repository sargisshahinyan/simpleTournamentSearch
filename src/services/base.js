import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://api-search.wincafe.net',
});

export default baseInstance;
