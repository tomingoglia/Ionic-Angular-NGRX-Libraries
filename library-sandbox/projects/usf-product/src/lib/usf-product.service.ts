import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { action } from './store/index'
import * as productSelector from './store/product/product.selector'
@Injectable({
  providedIn: 'root'
})
export class UsfProductService {

  constructor(private store: Store) { }
  
  productFeatureSelector = productSelector.productFeatureSelector;
  updateProductId = (productId: string) => this.store.dispatch(action.updateProductId({ productId: productId }));
  productId$: Observable<string> = this.store.select(productSelector.selectListId);

}
