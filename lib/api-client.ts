import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://syst-stock-1001-8c66c29d-ipkkzeyx.onporter.run/',
  headers: {
    'Content-Type': 'application/json',
  },
}); 