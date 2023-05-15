function Planet() {
	return (
		<main>
			<div className="container">
				<div className="info-states-container-mobile">
					<ul className="info-states">
						<li className="info-state-item mercury active">
							<div className="">OVERVIEW</div>
						</li>
						<li className="info-state-item mercury">
							<div>STRUCTURE</div>
						</li>
						<li className="info-state-item mercury">
							<div>SURFACE</div>
						</li>
					</ul>
				</div>
				<section className="planet-details-container">
					<div className="planet-image">
						<img src="images/planet-mercury.svg" alt="" />
					</div>

					<div className="planet-details">
						<div className="planet-about-container">
							<h1 className="planet-name">Mercury</h1>

							<div className="planet-about">
								<p className="about">
									Mercury is the smallest planet in the Solar
									System and the closest to the Sun. Its orbit
									around the Sun takes 87.97 Earth days, the
									shortest of all the Sun's planets. Mercury
									is one of four terrestrial planets in the
									Solar System, and is a rocky body like
									Earth.
								</p>

								<small className="planet-source">
									Source:{" "}
									<a href="#">
										Wikipedia{" "}
										<img
											src="images/icon-source.svg"
											alt=""
										/>
									</a>
								</small>
							</div>
						</div>

						<div className="info-states-container">
							<ul className="info-states">
								<li className="info-state-item mercury active">
									<div>01</div>
									<div>OVERVIEW</div>
								</li>
								<li className="info-state-item mercury">
									<div>02</div>
									<div>INTERNAL STRUCTURE</div>
								</li>
								<li className="info-state-item mercury">
									<div>03</div>
									<div>SURFACE GEOLOGY</div>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="planet-info-container">
					<div className="info-item">
						<span className="info-name">ROTATION TIME</span>
						<h2 className="info-value">58.6 DAYS</h2>
					</div>
					<div className="info-item">
						<span className="info-name">REVOLUTION TIME</span>
						<h2 className="info-value">87.97 DAYS</h2>
					</div>
					<div className="info-item">
						<span className="info-name">RADIUS</span>
						<h2 className="info-value">2,439.7 KM</h2>
					</div>
					<div className="info-item">
						<span className="info-name">AVERAGE TEMP.</span>
						<h2 className="info-value">430°C</h2>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Planet;
