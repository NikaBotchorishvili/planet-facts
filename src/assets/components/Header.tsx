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
						<div className="menu-icon-container">
							<img
								className="menu-icon"
								src="/images/icon-hamburger.svg"
								alt=""
							/>
						</div>
						<ul className="nav-links">
							<Link
								className="nav-item mercury"
								to={"/mercury/overview/"}
							>
								Mercury
							</Link>
							<Link
								className="nav-item venus"
								to={"/venus/overview/"}
							>
								Venus
							</Link>
							<Link
								className="nav-item earth"
								to={"/earth/overview/"}
							>
								Earth
							</Link>
							<Link
								className="nav-item mars"
								to={"/mars/overview/"}
							>
								Mars
							</Link>
							<Link
								className="nav-item jupiter"
								to={"/jupiter/overview/"}
							>
								Jupiter
							</Link>
							<Link
								className="nav-item saturn"
								to={"/saturn/overview/"}
							>
								Saturn
							</Link>
							<Link
								className="nav-item uranus"
								to={"/uranus/overview/"}
							>
								Uranus
							</Link>
							<Link
								className="nav-item neptune"
								to={"/neptune/overview/"}
							>
								Neptune
							</Link>
						</ul>
					</nav>
				</div>
			</header>
			<Outlet />
		</>
	);
}

export default Header;
