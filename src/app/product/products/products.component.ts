import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../product.models';
import { AppState } from '../../app.models';
import { getLoading, getProducts, getError } from './products.selector';
import { fetchProducts } from './products.actions';

@Component({
    selector: 'products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
    loading$: Observable<boolean>;
    products$: Observable<Product[]>;
    error$: Observable<string>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.loading$ = this.store.select(getLoading);
        this.products$ = this.store.select(getProducts);
        this.error$ = this.store.select(getError);

        this.store.dispatch(fetchProducts());
    }
}
