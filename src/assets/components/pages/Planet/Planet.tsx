import {
	useLoaderData,
	NavLink,
	useLocation,
	redirect,
} from "react-router-dom";
import InfoStates from "./components/InfoStates";
import PlanetInfo from "./components/PlanetInfo";
import PlanetAbout from "./components/PlanetAbout";
export interface Planet {
	name: string;
	className: string;
	overview: { content: string; source: string };
	structure: { content: string; source: string };
	geology: { content: string; source: string };
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: { planet: string; internal: string; geology: string };
}
export const planetLoader = ({ params }: any) => {
	if (params.planet_name) {
		redirect("/mercury/overview/");
	}
	let planetData = fetch("/data.json")
		.then((res) => res.json())
		.then((jsonData: Planet[]) =>
			jsonData.find(
				(planet) =>
					planet.name.toLowerCase() ==
					params.planet_name?.toLowerCase()
			)
		)
		.catch((error) => console.log(error));

	return planetData;
};

export const defaultPlanetLoader = () => {
	let planetData = fetch("/data.json")
		.then((res) => res.json())
		.then((jsonData: Planet[]) =>
			jsonData.find((planet) => planet.name.toLowerCase() == "mercury")
		)
		.catch((error) => console.log(error));

	return planetData;
};

function Planet() {
	const planetData = useLoaderData() as Planet;
	const loc = useLocation();
	let info_type = loc.pathname.split("/")[2];

	let imageSection;
	let aboutSection;
	if (info_type == "overview") {
		imageSection = (
			<div className="planet-image">
				<img className="image" src={planetData.images.planet} alt="" />
			</div>
		);
		aboutSection = (
			<>
				<p className="about">{planetData.overview.content}</p>

				<small className="planet-source">
					Source:{" "}
					<a href={planetData.overview.source} target="_blank">
						Wikipedia{" "}
						<img
							src="/images/icon-source.svg"
							alt="icon-source-image"
						/>
					</a>
				</small>
			</>
		);
	} else if (info_type == "internal") {
		imageSection = (
			<div className="planet-image">
				<img
					className="image"
					src={planetData.images.internal}
					alt=""
				/>
			</div>
		);
		aboutSection = (
			<>
				<p className="about">{planetData.structure.content}</p>

				<small className="planet-source">
					Source:{" "}
					<a href={planetData.structure.source} target="_blank">
						Wikipedia{" "}
						<img
							src="/images/icon-source.svg"
							alt="icon-source-image"
						/>
					</a>
				</small>
			</>
		);
	} else if (info_type == "surface") {
		imageSection = (
			<div className="planet-image geology-image-container ">
				<img className="image" src={planetData.images.planet} alt="" />
				<img
					className="geology-image"
					src={planetData.images.geology}
					alt=""
				/>
			</div>
		);
		aboutSection = (
			<>
				<p className="about">{planetData.geology.content}</p>

				<small className="planet-source">
					Source:{" "}
					<a href={planetData.geology.source} target="_blank">
						Wikipedia{" "}
						<img
							src="/images/icon-source.svg"
							alt="icon-source-image"
						/>
					</a>
				</small>
			</>
		);
	}

	return (
		<main>
			<div className="container">
				<InfoStates
					className={planetData.className}
					planetName={planetData.name}
					resClassName="info-states-container-mobile"
				/>
				{(imageSection && aboutSection) && (
					<PlanetAbout 
						name={planetData.name}
						className={planetData.className}
						aboutSection={aboutSection}
						imageSection={imageSection}
					/>

				)}
				<PlanetInfo
					rotation={planetData.rotation}
					temperature={planetData.temperature}
					radius={planetData.radius}
					revolution={planetData.revolution}
				/>
			</div>
		</main>
	);
}

export default Planet;