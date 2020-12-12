import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './products/products.reducer';
import { FeatureProduct } from './product.models';

export const ProductReducers: ActionReducerMap<FeatureProduct> = {
    products: productsReducer
};
