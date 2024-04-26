import { configureStore } from "@reduxjs/toolkit";

import toastReducer from "../toast.slice";

const store = configureStore({
	reducer: {
		toast: toastReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
