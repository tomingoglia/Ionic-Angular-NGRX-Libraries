import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as listState from './list.state'

export const listFeatureSelector = createFeatureSelector<listState.ListState>(listState.featureKey);

export const selectListId = createSelector(
    listFeatureSelector,
    (state: listState.ListState) => state.listId
);