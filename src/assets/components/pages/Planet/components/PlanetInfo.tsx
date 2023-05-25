import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import anime  from "animejs"
const PlanetInfo = ({
	rotation,
	revolution,
	radius,
	temperature,
}: {
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
}) => {
	let rotationNumber = Number(rotation.split(" ")[0]);
	let revolutionNumber = Number(revolution.split(" ")[0]);
	let radiusNumber = Number(radius.split(" ")[0].replace(/,/g, ""));
	let temperatureNumber = Number(temperature);

	useEffect(() => {
		anime({
			targets: ".rotation",
			innerHTML: [0, rotationNumber + "Days"],
			round: 10,
			easing: "linear",
			duration: 1500,
		})
		anime({
			targets: ".revolution",
			innerHTML: [0, revolutionNumber + "Days"],
			round: 10,
			easing: "linear",
			duration: 1500,
		})
		anime({
			targets: ".radius",
			innerHTML: [0, radiusNumber + "KM"],
			round: 10,
			easing: "linear",
			duration: 1500,
		})
		anime({
			targets: ".temperature",
			innerHTML: [0, temperatureNumber + "c°"],
			round: 10,
			easing: "linear",
			duration: 1500,
		})
	}, [useLocation()]);

	return (
		<section className="planet-info-container">
			<div className="info-item">
				<span className="info-name">ROTATION TIME</span>
				<h2 className="info-value rotation">{rotationNumber}</h2>
			</div>
			<div className="info-item">
				<span className="info-name">REVOLUTION TIME</span>
				<h2 className="info-value revolution">{revolutionNumber}</h2>
			</div>
			<div className="info-item">
				<span className="info-name">RADIUS</span>
				<h2 className="info-value radius">{radiusNumber}</h2>
			</div>
			<div className="info-item">
				<span className="info-name">AVERAGE TEMP.</span>
				<h2 className="info-value temperature">{temperatureNumber}</h2>
			</div>
		</section>
	);
};

export default PlanetInfo;
