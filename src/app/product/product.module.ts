import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductsEffects } from './products/products.effects';
import { ProductReducers } from './product.reducers';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProductsEffects]),
    StoreModule.forFeature('product', ProductReducers),
    HttpClientModule
  ],
  exports: [ProductsComponent]
})
export class ProductModule { }
