import { useLoaderData, NavLink, useLocation } from "react-router-dom";
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

function Planet() {
	const planetData: Planet = useLoaderData();
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
				<div className="info-states-container-mobile">
					<ul className="info-states">
						<li className="info-state-item mercury active">
							<div className="">OVERVIEW</div>
						</li>
						<li
							className={`info-state-item ${planetData.className}`}
						>
							<div>STRUCTURE</div>
						</li>
						<li className="info-state-item mercury">
							<div>SURFACE</div>
						</li>
					</ul>
				</div>
				<section className="planet-details-container">
					{imageSection}

					<div className="planet-details">
						<div className="planet-about-container">
							<h1 className="planet-name">{planetData.name}</h1>
							<div className="planet-about">{aboutSection}</div>
						</div>

						<div className="info-states-container">
							<ul className="info-states">
								<NavLink
									to={`/${planetData.name.toLowerCase()}/overview/`}
									className={`info-state-item ${planetData.className}`}
								>
									<div>01</div>
									<div>OVERVIEW</div>
								</NavLink>
								<NavLink
									to={`/${planetData.name.toLowerCase()}/internal/`}
									className={`info-state-item ${planetData.className}`}
								>
									<div>02</div>
									<div>INTERNAL STRUCTURE</div>
								</NavLink>
								<NavLink
									to={`/${planetData.name.toLowerCase()}/surface/`}
									className={`info-state-item ${planetData.className}`}
								>
									<div>03</div>
									<div>SURFACE GEOLOGY</div>
								</NavLink>
							</ul>
						</div>
					</div>
				</section>

				<section className="planet-info-container">
					<div className="info-item">
						<span className="info-name">ROTATION TIME</span>
						<h2 className="info-value">{planetData.rotation}</h2>
					</div>
					<div className="info-item">
						<span className="info-name">REVOLUTION TIME</span>
						<h2 className="info-value">{planetData.revolution}</h2>
					</div>
					<div className="info-item">
						<span className="info-name">RADIUS</span>
						<h2 className="info-value">{planetData.radius}</h2>
					</div>
					<div className="info-item">
						<span className="info-name">AVERAGE TEMP.</span>
						<h2 className="info-value">{planetData.temperature}</h2>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Planet;
