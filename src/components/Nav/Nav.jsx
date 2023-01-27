import { Link } from "react-router-dom";


function Nav() {
	return (
		<nav className="NavBloc">
			<Link to="/" className="nav-header_link-home"> Accueil </Link>
			<Link to="/about" className="nav-header_link-about"> A Propos </Link>
		</nav>
	);
}

export default Nav;