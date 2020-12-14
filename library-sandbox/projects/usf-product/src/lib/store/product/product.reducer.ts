import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './product.action';
import * as state from './product.state';

const initialState: state.ProductState = {
  productId: ''
};

const productReducer = createReducer(
  initialState,
  on(actions.updateProductId, (state, action) => ({ ...state, productId: action.productId }))
)

export function reducer(state: state.ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
