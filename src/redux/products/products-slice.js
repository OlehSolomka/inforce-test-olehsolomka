import { createSlice } from '@reduxjs/toolkit';
import { getProducts, postProduct, deleteProduct } from './products-operations';
import * as productsActions from './products-actions';

const initialState = {
  products: [],
  isFetchingProducts: false,
  sortingMethod: 'name/down',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: state => {
      state.isFetchingProducts = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.error = null;
      state.products = action.payload;
      state.isFetchingProducts = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.isFetchingProducts = false;
      state.error = action.payload;
    },
    [postProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload)
    },
    [postProduct.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },
    [productsActions.setNameDown]: (state, action) => {
      state.sortingMethod = action.payload;
    },
    [productsActions.setNameUp]: (state, action) => {
      state.sortingMethod = action.payload;
    },
    [productsActions.setNumberDown]: (state, action) => {
      state.sortingMethod = action.payload;
    },
    [productsActions.setNumbetUp]: (state, action) => {
      state.sortingMethod = action.payload;
    },
  },
});

export default productSlice.reducer;
