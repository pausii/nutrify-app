import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/landingPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/landing-page" element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
