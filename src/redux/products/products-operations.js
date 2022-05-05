import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsAPI } from 'api';

export const getProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const { data } = await productsAPI.getAllProducts();
    return data;
  }
);
export const postProduct = createAsyncThunk(
  'products/postProducts',
  async productData => {
    const { data } = await productsAPI.postProduct(productData);
    return data;
  }
);
export const deleteProduct = createAsyncThunk('products/postProducts',
  async id => {
    await productsAPI.deleteProduct(id);
    return id;
}
);
