import { Link } from "react-router-dom";
import logo from "../../assets/logo/LOGO.svg";
import Nav from "../Nav/Nav";

function Header() {
	return (
		<header className="headerWrap">
			<Link to="/" className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</Link>
			<Nav className="nav-header" />
		</header>
	);
}

export default  Header;