import {
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
    Action,
    ActionReducerMap,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';
import * as usfList from 'usf-list';
import * as usfProduct from 'usf-product';

// To run schematics update angular.json    "defaultCollectionaaa": "@ngrx/schematics",
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
// import * as fromLayout from '@example-app/core/reducers/layout.reducer';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    [usfList.store.state.featureKey]: usfList.store.state.ListState;
    [usfProduct.store.state.featureKey]: usfProduct.store.state.ProductState;
    router: fromRouter.RouterReducerState<any>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<State, Action>
>('Root reducers token', {
    factory: () => ({
        [usfList.store.state.featureKey]: usfList.store.reducer.reducer,
        [usfProduct.store.state.featureKey]: usfProduct.store.reducer.reducer,
        router: fromRouter.routerReducer,
    }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();

        return result;
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];

/**
* Router Selectors
*/
export const selectRouter = createFeatureSelector<
    State,
    fromRouter.RouterReducerState
>('router');
export const { selectRouteData } = fromRouter.getSelectors(selectRouter);