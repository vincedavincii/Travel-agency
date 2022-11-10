import {Routes, Route, BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import ModalProvider from "./context/providers/ModalProvider";
import NavProvider from "./context/providers/NavProvider";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import {HelmetProvider} from "react-helmet-async";
import DestinationProvider from "./context/providers/DestinationProvider";
import DetailsPage from "./pages/DetailsPage";
import SharedProvider from "./context/providers/SharedProvider";
import Gallery from "./components/gallery/Gallery";
import GalleryProvider from "./context/providers/GalleryProvider";

function App() {
	return (
		<BrowserRouter>
			<ModalProvider>
				<NavProvider>
					<DestinationProvider>
						<SharedProvider>
							<GalleryProvider>
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
										<Route
											path="/details/:id"
											element={<DetailsPage />}
										/>
										<Route element={<ErrorPage />} />
									</Routes>
								</HelmetProvider>
							</GalleryProvider>
						</SharedProvider>
					</DestinationProvider>
				</NavProvider>
			</ModalProvider>
		</BrowserRouter>
	);
}

export default App;
