import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { action } from './store/index'
import * as listSelector from './store/list/list.selector'

@Injectable({
  providedIn: 'root'
})
export class UsfListService {

  constructor(private store: Store) { }

  listFeatureSelector = listSelector.listFeatureSelector;
  updateListId = (listId: string) => this.store.dispatch(action.updateListId({ listId: listId }));
  listId$: Observable<string> = this.store.select(listSelector.selectListId);
}
