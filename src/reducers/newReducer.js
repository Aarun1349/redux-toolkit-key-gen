import { createReducer } from "@reduxjs/toolkit";
import { addKey } from "../actions/actions";
const initialState = [];
const newReducer = createReducer(initialState, ((builder)=>{
  
    builder.addCase(addKey,(state,action)=>{
        console.log(action.payload)
    })
}))

export default newReducer;