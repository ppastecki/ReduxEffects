import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './products.constants';
import { ProductsState } from '../product.models';

const initialState: ProductsState = {
    loading: false,
    products: [],
    error: void 0
};

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, loading: true };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload }
        case FETCH_PRODUCTS_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}
