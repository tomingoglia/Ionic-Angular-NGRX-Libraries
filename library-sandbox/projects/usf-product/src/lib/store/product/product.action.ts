import { createAction, props } from '@ngrx/store';

export const updateProductId = createAction('[Product] updateProductId', props<{ productId: string }>());