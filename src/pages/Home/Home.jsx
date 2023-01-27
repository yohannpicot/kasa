import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import Logements from '../../datas/logements.json'


/*Ici on récupere les donners des logements avec le fichier JSON, on les map pour les avoir dans un tableau,
est en fonction de leur id on leur applique les different ellement (cover, titre), les cards son aussi cliclable et renvoie au bon logement via sont id */
function Home() {

	return (
		<div>
			<Banner />
			<div className="cards-container">
				{Logements.map((logement, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${logement.id}`}>
							<Card cover={logement.cover} title={logement.title} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;