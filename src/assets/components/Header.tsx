import { Link, Outlet } from "react-router-dom";
function Header() {
	return (
		<>
			<header>
				<div className="header-container">
					<div className="header">
						<h1>THE PLANETS</h1>
					</div>
					<nav className="navigation">
						<ul className="nav-links">
							<li className="nav-item">
								<Link to={"planet/mercury"}>Mercury</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/venus"}>Venus</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/earth"}>Earth</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/mars"}>Mars</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/jupiter"}>Jupiter</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/saturn"}>Saturn</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/uranus"}>Uranus</Link>
							</li>
							<li className="nav-item">
								<Link to={"planet/neptune"}>Neptune</Link>
							</li>
						</ul>
					</nav>
					<div className="menu-icon-container">
						<img
							className="menu-icon"
							src="/images/icon-hamburger.svg"
							alt=""
						/>
					</div>
				</div>
			</header>
			<Outlet />
		</>
	);
}

export default Header;
