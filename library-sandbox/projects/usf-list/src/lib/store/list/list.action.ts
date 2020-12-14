import { createAction, props } from '@ngrx/store';

export const updateListId = createAction('[List] updateListId', props<{ listId: string }>());