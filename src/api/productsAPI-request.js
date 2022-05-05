import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/';

export const getAllProducts = () => {
  return axios.get('products');
};

export const postProduct = data => {
  return axios.post('products', data)
}

export const deleteProduct = id => {
   return axios.delete(`products/${id}`);
}
export const updateProduct = (data, id) => {
  return axios.patch(`products/${id}`, data);
}

