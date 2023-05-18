function PlanetInfo({
	rotation,
	revolution,
	radius,
	temperature,
}: {
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
}) {
	return (
		<section className="planet-info-container">
			<div className="info-item">
				<span className="info-name">ROTATION TIME</span>
				<h2 className="info-value">{rotation}</h2>
			</div>
			<div className="info-item">
				<span className="info-name">REVOLUTION TIME</span>
				<h2 className="info-value">{revolution}</h2>
			</div>
			<div className="info-item">
				<span className="info-name">RADIUS</span>
				<h2 className="info-value">{radius}</h2>
			</div>
			<div className="info-item">
				<span className="info-name">AVERAGE TEMP.</span>
				<h2 className="info-value">{temperature}</h2>
			</div>
		</section>
	);
}

export default PlanetInfo;
