import { createSlice } from "@reduxjs/toolkit";

import { IToast } from "../utils/interfaces";

const toastSlice = createSlice({
	name: "toast",
	initialState: {
		message: "",
		kind: "success",
		time: 0,
		isOpen: false,
	} as IToast,
	reducers: {
		setToast: (state, action: { payload: IToast }) => {
			state.message = action.payload.message;
			state.kind = action.payload.kind;
			state.time = action.payload.time;
			state.isOpen = action.payload.isOpen;
		},
	},
});

export const {setToast} = toastSlice.actions;
export default toastSlice.reducer;
