import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as state from './product.state'

export const productFeatureSelector = createFeatureSelector<state.ProductState>(state.featureKey);

export const selectListId = createSelector(
    productFeatureSelector,
    (state: state.ProductState) => state.productId
);

