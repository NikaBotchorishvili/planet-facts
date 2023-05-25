import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";
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
					{screenWidth <= 520 && toggled && (
						<RemoveScroll>
							<nav className="navigation">
								<ul className="nav-links">
									<Link
										onClick={() => handleToggle()}
										className="nav-item mercury"
										to={"/mercury/overview/"}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Mercury
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										className="nav-item venus"
										to={"/venus/overview/"}
										onClick={() => handleToggle()}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Venus
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										onClick={() => handleToggle()}
										className="nav-item earth"
										to={"/earth/overview/"}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Earth
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										className="nav-item mars"
										to={"/mars/overview/"}
										onClick={() => handleToggle()}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Mars
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										onClick={() => handleToggle()}
										className="nav-item jupiter"
										to={"/jupiter/overview/"}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Jupiter
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										onClick={() => handleToggle()}
										className="nav-item saturn"
										to={"/saturn/overview/"}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Saturn
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										onClick={() => handleToggle()}
										className="nav-item uranus"
										to={"/uranus/overview/"}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Uranus
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
									<Link
										onClick={() => handleToggle()}
										className="nav-item neptune"
										to={"/neptune/overview/"}
									>
										<div className="nav-item-info">
											<div className="circle"></div>
											Neptune
										</div>
										<img
											src="/images/icon-chevron.svg"
											alt="right-icon"
										/>
									</Link>
								</ul>
							</nav>
						</RemoveScroll>
					)}
					{screenWidth > 520 && (
						<nav className="navigation">
							{/* <div className="menu-icon-container">
								<img
									className="menu-icon"
									src="/images/icon-hamburger.svg"
									alt=""
								/>
							</div> */}
							<ul className="nav-links">
								<Link
									className="nav-item mercury"
									to={"/mercury/overview/"}
								>
									Mercury
									<div className=""></div>
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
					)}
				</div>
			</header>
			<Outlet />
		</>
	);
}

export default Header;
