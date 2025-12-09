import { AxiosClient } from '../axios-client';

export class GameModule {
  public getGames = () => {
    const axiosClient = new AxiosClient('https://69342a414090fe3bf01f241d.mockapi.io/');
    return axiosClient.get('/test').then(({ data }) => {
      return data;
    });
  };
}
