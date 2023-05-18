import { JSX } from "react/jsx-dev-runtime";
import InfoStates from "./InfoStates";
function PlanetAbout({
	name,
	aboutSection,
	className,
    imageSection,
}: {
	name: string;
	aboutSection: JSX.Element;
	imageSection: JSX.Element;
	className: string;
}) {
	return (
		<section className="planet-details-container">
			{imageSection}

			<div className="planet-details">
				<div className="planet-about-container">
					<h1 className="planet-name">{name}</h1>
					<div className="planet-about">{aboutSection}</div>
				</div>

				<InfoStates
					planetName={name}
					className={className}
					resClassName="info-states-container"
				/>
			</div>
		</section>
	);
}

export default PlanetAbout;
