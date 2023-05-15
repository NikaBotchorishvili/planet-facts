function Header() {
	return (
		<header>
			<div className="header-container">
				<div className="header">
					<h1>THE PLANETS</h1>
				</div>
				<nav className="navigation">
					<ul className="nav-links">
						<li className="nav-item">
							<a href="#">Mercury</a>
						</li>
						<li className="nav-item">
							<a href="#">Venus</a>
						</li>
						<li className="nav-item">
							<a href="#">Earth</a>
						</li>
						<li className="nav-item">
							<a href="#">Mars</a>
						</li>
						<li className="nav-item">
							<a href="#">Jupiter</a>
						</li>
						<li className="nav-item">
							<a href="#">Saturn</a>
						</li>
						<li className="nav-item">
							<a href="#">Uranus</a>
						</li>
						<li className="nav-item">
							<a href="#">Neptune</a>
						</li>
					</ul>
				</nav>
				<div className="menu-icon-container">
					<img className="menu-icon" src="/images/icon-hamburger.svg" alt="" />
				</div>
			</div>
		</header>
	);
}

export default Header;
