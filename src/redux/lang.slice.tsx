import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
	name: "lang",
	initialState: {
		value: "en",
	},
	reducers: {
		setLang: (state, action: { payload: string }) => {
			state.value = action.payload;
		},
	},
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
