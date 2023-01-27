import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes/Routing";
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// Ici l'index nous renvoie vers le routeur (Routing.jsx)
	<BrowserRouter>
		<Routing />
	</BrowserRouter>
);
