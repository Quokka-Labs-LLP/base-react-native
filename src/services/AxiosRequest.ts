import NetInfo from '@react-native-community/netinfo';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Errors } from '~constants/ErrorMessages';
import { logger } from '~utils';

export type method_type = 'get' | 'post' | 'put' | 'patch' | 'delete';

let axios_instance: AxiosInstance = axios.create();

const axios_interceptors = (debug?: boolean) => {
  axios_instance.interceptors.request.use(request => {
    // debug && logger('request=>', request)
    return request;
  },
    error => {
      debug && logger('request error=>', error)
      return Promise.reject(error);
    }
  );
  axios_instance.interceptors.response.use(response => {
    // debug && logger('response=>', response)
    return response;
  },
    error => {
      debug && logger('response error=>', error)
      return Promise.reject(error);
    }
  );
};

const createAxiosInstance = (instanceConfiguration?: AxiosRequestConfig) => {
  if (!instanceConfiguration) {
    instanceConfiguration = {};
  }
  axios_instance = axios.create(instanceConfiguration);
};

const transformAxiosResponse = async (axios_response: any, debug?: boolean) => {
  axios_interceptors(debug);
  return await axios_response
    .then(async (res: AxiosResponse) => {
      debug && logger('axios response=>', res)
      return res.data;
    })

}

const apiGetDeleteRequest = async (
  method: method_type,
  url: string,
  config: AxiosRequestConfig = {},
  debug?: boolean,
) => await transformAxiosResponse(axios_instance[method](url, config), debug);

const apiPostPutPatchRequest = async (
  method: method_type,
  url: string,
  data: any,
  config: AxiosRequestConfig = {},
  debug?: boolean,
) => await transformAxiosResponse(axios_instance[method](url, data, config), debug);

const request = async (
  method: method_type,
  url: string,
  data: any,
  config: AxiosRequestConfig = {},
  debug?: boolean,
) => {
  debug && logger('------api calling-------')
  const netState = await NetInfo.fetch();
  if (netState.isConnected) {
    if (method === 'get' || method === 'delete') {
      return await apiGetDeleteRequest(method, url, config, debug);
    } else {
      return await apiPostPutPatchRequest(method, url, data, config, debug);
    }
  } else {
    throw { code: 'offline', message: Errors.offlineError };
  }
};

export { request, createAxiosInstance };
