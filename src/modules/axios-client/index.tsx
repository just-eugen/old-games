import axios from 'axios';

export const AxiosClient = axios.create({
  baseURL: 'https://69342a414090fe3bf01f241d.mockapi.io',
});

AxiosClient({
  url: '/test',
  method: 'get',
});
