import { configureStore } from "@reduxjs/toolkit";
import keyReducer from "../reducers/keyReducer";
const store = configureStore({
    reducer:{keyPairs:keyReducer}
})

export default store;