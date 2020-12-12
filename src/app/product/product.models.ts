export interface Product {
    id: string,
    name: string
}

export interface ProductsState {
    loading: boolean;
    products: Product[];
    error: string;
}

export interface FeatureProduct {
    products: ProductsState;
}
