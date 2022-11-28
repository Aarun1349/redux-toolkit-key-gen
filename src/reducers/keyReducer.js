import { createReducer } from "@reduxjs/toolkit";
import { addKey, changeName, deleteKey } from "../actions/actions";
const initialState = {savedKeys:[]};

const keyReducer = createReducer(initialState, (builder) => {
    builder.addCase(addKey,(state,action)=>{
        let newKey = {
          name: "",
          values: action.payload,
        };
        state.savedKeys.push(newKey);

    })





  builder.addCase(deleteKey, (state, action) => {
    let index = action.payload;
    state.savedKeys = state.savedKeys.filter((elem) =>  elem !== state.savedKeys[index]);
    console.log('state',state.savedKeys)
  });

  
  builder.addCase(changeName, (state, action) => {
    console.log("Action", action.payload);
    let name = action.payload.name;
    let index = action.payload.index;

    state.savedKeys = state.savedKeys.filter((elem, id) => {
      if (id === index) {
        elem.name = name;
      }
      return elem;
    });
    console.log("Saved ", state.savedKeys);
  });
});

export default keyReducer;
