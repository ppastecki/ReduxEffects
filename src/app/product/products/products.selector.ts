import { AppState } from '../../app.models';

export const getLoading = (state: AppState) => state.product.products.loading;
export const getProducts = (state: AppState) => state.product.products.products;
export const getError = (state: AppState) => state.product.products.error;
