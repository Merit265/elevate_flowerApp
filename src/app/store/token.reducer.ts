import { createReducer, on } from "@ngrx/store";
import { clearUserToken, setUserToken } from "./token.action";


export const initialState:any = 'hello' ;

export const tokenReducer = createReducer(
 initialState,
 on(setUserToken, (state, { userToken }) => userToken) ,
 on(clearUserToken, (state, { userToken }) => userToken) ,


)

