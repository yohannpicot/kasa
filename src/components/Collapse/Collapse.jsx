import { useState, useRef, useEffect } from "react"; //import des hooks de base react
import Chevron from "../../assets/images/vectorBas.svg";


function Collapse(props) {
	// le state du toggle (et false par défaut)
	const [toggle, setToggle] = useState(false); 
	// state de la hauteur du collapse
	const [heightEl, setHeightEl] = useState();

	const toggleState = () => {
	//toggleState modifie la valeur toggle au clic
		setToggle(!toggle);
	};
	//récupère et conserve la valeur de hauteur du collapse déplié
	const refHeight = useRef(); 

	useEffect(() => {
		/* useEffect s'éxécute au montage du composant, 
		dans ce cas il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight */
		setHeightEl(`${refHeight.current.scrollHeight}px`); 
	}, []);

	return (
		// Par défault la collapse et replier, elle s'ouvre ou ce ferme au clique.
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}

export default Collapse;