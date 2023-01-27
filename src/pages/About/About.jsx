import BanniereApropos from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
// Les donner des collaps sont dans un fichier JSON
import aboutArray from "../../datas/aboutArray.json"; 

function About() {
	return (
		<div>
			<BanniereApropos />
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</div>
	);
}

export default About;