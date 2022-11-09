import React from "react";
import {Helmet} from "react-helmet-async";

const AboutPage = () => {
	return (
		<>
			<Helmet>
				<title>About page</title>
				<meta
					name="description"
					content="Travel to the world with travel frirends"
				/>
				<meta
					name="keywords"
					content="travel, travel tours, airline"
				/>
			</Helmet>

			<h1>About page</h1>
		</>
	);
};

export default AboutPage;
