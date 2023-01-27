import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "../components/Header/Header";
import FicheLogement from "../pages/FicheLogement/FicheLogement";
import Footer from "../components/Footer/Footer";
import Error from "../pages/Error/Error.jsx";


/* Ici on applique la logique de routing avec react router dom */
function Routing() {
	return (
		<div className="Routing">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default Routing;
