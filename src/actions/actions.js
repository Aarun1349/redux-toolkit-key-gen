import { createAction } from "@reduxjs/toolkit";

const  addKey  = createAction("addkey");
const  deleteKey  = createAction("deletekey");
const  changeName  = createAction("changename");

export { addKey, deleteKey, changeName };
