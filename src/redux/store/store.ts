import { configureStore } from "@reduxjs/toolkit";

import toastReducer from "../toast.slice";
import langReducer from "../lang.slice";

const store = configureStore({
	reducer: {
		toast: toastReducer,
		lang: langReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
