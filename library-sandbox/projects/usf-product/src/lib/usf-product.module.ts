import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as usfProduct from './store'

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(usfProduct.state.featureKey, usfProduct.reducer.reducer)
  ],
  exports: []
})
export class UsfProductModule { }
