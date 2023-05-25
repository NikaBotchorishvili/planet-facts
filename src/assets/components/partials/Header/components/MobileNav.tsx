import { RemoveScroll } from "react-remove-scroll";
import { Link } from "react-router-dom";

function MobileNav({handleToggle}: {handleToggle: Function}) {
	return (
		<RemoveScroll>
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
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
					<img src="/images/icon-chevron.svg" alt="right-icon" />
				</Link>
			</ul>
		</RemoveScroll>
	);
}

export default MobileNav;
