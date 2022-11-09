import {useContext} from "react";
import {Link} from "react-router-dom";
import NavContext from "../context/NavContext";

const Nav = () => {
	const {state, dispatch} = useContext(NavContext);
	// // console.log('nav state: ', state);
	return (
		<>
			{state ? <div className="navLayer"></div> : ""}

			<div className={state ? "nav nav_open" : "nav nav_close"}>
				<div className="nav_content">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</div>
			</div>
		</>
	);
};
export default Nav;
