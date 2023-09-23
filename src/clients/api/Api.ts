import Axios, { AxiosRequestConfig } from "axios";

import { getApiHost } from "../../services/HostService/HostService";
import { RAPID_API_HOST, RAPID_API_KEY } from "../../shared/static/keys";

export interface IRequest {
  url: string;
  body?: any;
  config?: AxiosRequestConfig;
}

const defaultHeaders: AxiosRequestConfig = {
  headers: {
    "x-rapidapi-host": RAPID_API_HOST,
    "x-rapidapi-key": RAPID_API_KEY,
  },
};

const Api = {
  get: ({ url, config }: IRequest): Promise<any> =>
    Axios.get(`${getApiHost()}${url}`, { ...defaultHeaders, ...config }),

  post: ({ url, body, config }: IRequest): Promise<any> =>
    Axios.post(`${getApiHost()}${url}`, body, config),

  put: ({ url, body }: IRequest): Promise<any> =>
    Axios.put(`${getApiHost()}${url}`, body),

  delete: ({ url }: IRequest): Promise<any> =>
    Axios.delete(`${getApiHost()}${url}`),
};

export default Api;
