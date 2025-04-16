import { createAction, props } from "@ngrx/store";


export const setUserToken = createAction('[userToken] setUserToken',
 props<{ userToken: string }>()
);
export const clearUserToken = createAction('[userToken] clearUserToken',
 props<{ userToken: string }>()
);