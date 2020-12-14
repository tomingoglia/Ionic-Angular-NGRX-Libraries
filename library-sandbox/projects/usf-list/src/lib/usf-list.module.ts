import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as usfList from './store'

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(usfList.state.featureKey, usfList.reducer.reducer)
  ],
  exports: []
})
export class UsfListModule { }
