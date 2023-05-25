import { Link } from "react-router-dom";

function DefaultNav() {
	return (
		<ul className="nav-links">
			<Link className="nav-item mercury" to={"/mercury/overview/"}>
				Mercury
			</Link>
			<Link className="nav-item venus" to={"/venus/overview/"}>
				Venus
			</Link>
			<Link className="nav-item earth" to={"/earth/overview/"}>
				Earth
			</Link>
			<Link className="nav-item mars" to={"/mars/overview/"}>
				Mars
			</Link>
			<Link className="nav-item jupiter" to={"/jupiter/overview/"}>
				Jupiter
			</Link>
			<Link className="nav-item saturn" to={"/saturn/overview/"}>
				Saturn
			</Link>
			<Link className="nav-item uranus" to={"/uranus/overview/"}>
				Uranus
			</Link>
			<Link className="nav-item neptune" to={"/neptune/overview/"}>
				Neptune
			</Link>
		</ul>
	);
}

export default DefaultNav;
