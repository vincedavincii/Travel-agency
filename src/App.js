import {Routes, Route, BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import ModalProvider from "./context/providers/ModalProvider";
import NavProvider from "./context/providers/NavProvider";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import {HelmetProvider} from "react-helmet-async";

function App() {
	return (
		<BrowserRouter>
			<ModalProvider>
				<NavProvider>
					<HelmetProvider>
						<Toggle />
						<Nav />
						<Routes>
							<Route
								path="/"
								element={<HomePage />}
							/>
							<Route
								path="/about"
								element={<AboutPage />}
							/>
							<Route element={<ErrorPage />} />
						</Routes>
					</HelmetProvider>
				</NavProvider>
			</ModalProvider>
		</BrowserRouter>
	);
}

export default App;
