import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public request<T = unknown>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>(config);
  }

  public get = (url: string) => {
    return this.axiosInstance.get(url);
  };
}
