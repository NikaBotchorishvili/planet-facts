import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";
import MobileNav from "./components/MobileNav";
import DefaultNav from "./components/DefaultNav";
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
							<MobileNav handleToggle={() => handleToggle()}/>
						)}
					</nav>
					{screenWidth > 520 && (
						<DefaultNav />
					)}
				</div>
			</header>
			<Outlet />
		</>
	);
}

export default Header;