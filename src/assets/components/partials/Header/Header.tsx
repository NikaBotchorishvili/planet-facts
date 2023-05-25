import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import DefaultNav from "./components/DefaultNav";
import ParticleBackground from "../../ParticleBackground";
function Header() {
	const [toggled, setToggled] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	window.addEventListener("resize", () => {
		setScreenWidth(window.innerWidth);
	});

	const handleToggle = () => {
		setToggled((prevToggled) => !prevToggled);
	};

	return (
		<>
			<ParticleBackground/>
			<header>
				<div className="header-container">
					<div className="header">
						<h1>THE PLANETS</h1>
					</div>
					<div
						className="menu-icon-container"
						onClick={() => handleToggle()}
					>
						<img
							className="menu-icon"
							src="/images/icon-hamburger.svg"
							alt=""
						/>
					</div>
					<nav className="navigation">
						{screenWidth <= 520 && toggled && (
							<MobileNav handleToggle={() => handleToggle()} />
						)}
						{screenWidth > 520 && <DefaultNav />}
					</nav>
				</div>
			</header>
			<Outlet />
		</>
	);
}

export default Header;
