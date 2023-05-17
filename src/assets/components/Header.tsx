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
								<Link to={"mercury/overview/"}>Mercury</Link>
							</li>
							<li className="nav-item">
								<Link to={"venus/overview/"}>Venus</Link>
							</li>
							<li className="nav-item">
								<Link to={"earth/overview/"}>Earth</Link>
							</li>
							<li className="nav-item">
								<Link to={"mars/overview/"}>Mars</Link>
							</li>
							<li className="nav-item">
								<Link to={"jupiter/overview/"}>Jupiter</Link>
							</li>
							<li className="nav-item">
								<Link to={"saturn/overview/"}>Saturn</Link>
							</li>
							<li className="nav-item">
								<Link to={"uranus/overview/"}>Uranus</Link>
							</li>
							<li className="nav-item">
								<Link to={"neptune/overview/"}>Neptune</Link>
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
