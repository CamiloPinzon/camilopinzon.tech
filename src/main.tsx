import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import store from "./redux/store/store.ts";
import App from "./App.tsx";
import i18n from "./i18n/index.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<Suspense fallback={<div>Loading....</div>}>
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>
			</Suspense>
		</I18nextProvider>
	</React.StrictMode>
);
