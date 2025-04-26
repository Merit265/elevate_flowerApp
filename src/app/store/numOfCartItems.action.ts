import { createAction, props } from "@ngrx/store";

export const setnumOfCartItems = createAction('[numOfCartItems] setnumOfCartItems',
 props<{ numOfCartItems: number }>()
);
