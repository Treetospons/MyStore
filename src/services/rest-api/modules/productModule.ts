import {BASE_API} from '~/services/config';
import restApi from '../restApi';

restApi.defaults.baseURL = BASE_API;

export const fetchProductAll = () => {
  return restApi.get('/products');
};

export const fetchProductById = async ({id}: {id: number}) => {
  return restApi.get(`/products/${id}`);
};
