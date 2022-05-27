/** @format */

import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
