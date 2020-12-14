import { Action, createReducer, on } from '@ngrx/store';
import { store } from 'projects/usf-list/src/public-api';
import * as action from './list.action';
import * as State from './list.state';

const initialState: State.ListState = {
  listId: ''
};

const listReducer = createReducer(
  initialState,
  on(action.updateListId, (state, action) => ({ ...state, listId: action.listId }))
)

export function reducer(state: State.ListState | undefined, action: Action) {
  return listReducer(state, action);
}
