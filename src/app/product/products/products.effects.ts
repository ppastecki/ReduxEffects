import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, delay, catchError, map } from 'rxjs/operators';
import { FETCH_PRODUCTS } from './products.constants';
import { fetchProductsSuccess, fetchProductsError } from './products.actions';

@Injectable()
export class ProductsEffects {
    @Effect() products$: Observable<Action>;

    constructor(private actions$: Actions<Action>, private http: HttpClient) {
        this.products$ = this.actions$.pipe(
            ofType(FETCH_PRODUCTS),
            switchMap(action => this.getProducts())
        );
    }

    private getProducts() {
        return this.http
            .get('data/products.json')
            .pipe(
                delay(3000),
                map(fetchProductsSuccess),
                catchError(err => of(fetchProductsError(err))));
    }
}
