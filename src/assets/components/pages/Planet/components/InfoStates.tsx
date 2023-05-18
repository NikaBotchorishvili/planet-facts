import { NavLink } from "react-router-dom";

function InfoStates({resClassName, planetName, className}: { resClassName: string, planetName: string, className: string }) {
	return (
		<div className={resClassName}>
			<ul className="info-states">
				<NavLink
					to={`/${planetName.toLowerCase()}/overview/`}
					className={`info-state-item ${className}`}
				>
					OVERVIEW
				</NavLink>
				<NavLink
					to={`/${planetName.toLowerCase()}/internal/`}
					className={`info-state-item ${className}`}
				>
					STRUCTURE
				</NavLink>
				<NavLink
					to={`/${planetName.toLowerCase()}/surface/`}
					className={`info-state-item ${className}`}
				>
					SURFACE
				</NavLink>
			</ul>
		</div>
	);
}

export default InfoStates;
