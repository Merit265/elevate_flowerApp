import { createReducer, on } from "@ngrx/store";
import { setnumOfCartItems } from "./numOfCartItems.action";

export const initialState:any = null ;

export const numOfCartItemsReducer = createReducer(
 initialState,
  on(setnumOfCartItems, (state, { numOfCartItems}) => numOfCartItems) ,
) 
