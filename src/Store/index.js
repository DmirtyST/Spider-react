/** @format */
import {configureStore} from "@reduxjs/toolkit";
import addProductSlice from "./Slice/addProduct";
const store = configureStore({
	reducer: {cart: addProductSlice},
});

export default store;
