import React, {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Header = ({heading, paragraph, children, image}) => {
	const [state] = useState({
		video: "/assets/videos/bg-vid.mp4",
		photo: "assets/images/bg-photo.png",
		logo: "assets/images/logo.png",
	});
	return (
		<div className="header">
			<div className="container pr">
				<div className="header_logo">
					<LazyLoadImage
						src={state.logo}
						alt="logo"
					/>
				</div>
			</div>
			<div className="header-video">
				{image ? (
					<LazyLoadImage
						src={image}
						alt={image}
					/>
				) : (
					<video
						src={state.video}
						loop
						autoPlay
						muted
						poster={state.photo}
					/>
				)}
			</div>

			<div className="header_contents">
				<div className="container">
					<div className="header_contents_text">
						<div className="header_contents_text_child">
							<h1 className="header_contents_text_child_h1">{heading}</h1>

							<p className="header_contents_text_child_p">{paragraph}</p>

							<div className="header_contents_text_child_link">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
