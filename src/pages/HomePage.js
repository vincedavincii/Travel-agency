import React, {useContext, useState, useEffect} from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ModalContext from "../context/ModalContext";
import {OPEN_MODAL} from "../context/types/ModalTypes";
import {Helmet} from "react-helmet-async";
import Destinations from "../components/destination/Destinations";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";

const HomePage = () => {
	const {dispatch} = useContext(ModalContext);
	const [registerModel] = useState("registerModel");
	const [loginModal] = useState("loginModal");

	const [state] = useState({
		heading: "Your trusted travel partner",
		paragraph:
			"The world is a book and those who do not travel read only one page. Lets help you make great memories",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Travel Partner</title>
				<meta
					name="description"
					content="Travel to the world with travel frirends"
				/>
				<meta
					name="keywords"
					content="travel, travel tours, airline"
				/>
			</Helmet>
			<Header
				heading={state.heading}
				paragraph={state.paragraph}
			>
				<button
					onClick={() => dispatch({type: OPEN_MODAL, payload: registerModel})}
					className="btn-default"
				>
					Get Started
				</button>
			</Header>

			<Modal current={registerModel}>
				<Register currentModal={loginModal} />
			</Modal>

			<Modal current={loginModal}>
				<Login currentModal={registerModel} />
			</Modal>

			<Destinations />
			<Services />
			<Reviews />
		</>
	);
};

export default HomePage;
