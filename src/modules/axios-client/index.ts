import axios, { AxiosInstance } from 'axios';

export class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public get = (url: string) => {
    return this.axiosInstance.get(url);
  };
}
