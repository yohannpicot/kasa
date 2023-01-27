import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import axios from "axios";



function FicheLogement() {
	// Récupere les parametres de la route (Hook)
	const params = useParams();
	// Permet de re diriger vers une autre route
	const Navigate = useNavigate();
	// Récuperer les donner selectionner par le user
	const [chooseAppart, setChooseAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			/*Sur les logements j'ai utiliser axio afin d'anticiper le passage sur l'api,
			 afin de faciliter la transition */
			const res = await axios.get("/logements.json"); 
			// On recupere l'id 
			const choose = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setChooseAppart(choose));
			// Condition si l'id n'est pas bon on renvoie vers la page Error 404
			if (choose === undefined) {
				Navigate("/404", { state: { message: "unavailable data" } }); 
			}
		};
		getData();
		// eslint-disable-next-line
	},[]); // *******
	// Déclaration des differents variable utiles
	const slidePictures = (chooseAppart && chooseAppart.pictures);
	const tags = (chooseAppart && chooseAppart.tags);
	const equipments = (chooseAppart && chooseAppart.equipments);
	const equip = chooseAppart && equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	// -- //

	return (
		chooseAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePictures} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{chooseAppart.title}</h1>
							<h3>{chooseAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={chooseAppart.host.name}
								hostPic={chooseAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={chooseAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={chooseAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}

export default FicheLogement;