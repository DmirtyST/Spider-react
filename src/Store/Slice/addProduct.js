/** @format */

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	additems: [],
};

const addProductsSlice = createSlice({
	name: "cart",
	initialState,
	addProduct: (state, action) => {
		state.addItems.push(action.payload);
	},
});

export const {addProduct} = addProductsSlice.actions;
export default addProductsSlice.reducer;
