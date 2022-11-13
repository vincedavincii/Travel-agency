import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import DestinationContext from "../context/DestinationContext";
import {CITIES, DETAILS} from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/destination/DestinationInfo";
import City from "../components/city/City";
import Footer from "../components/footer/Footer";

const DetailsPage = () => {
	const {destinationData, dispatch} = useContext(DestinationContext);
	const {details, selectedCity} = destinationData;
	const {id} = useParams();

	useEffect(() => {
		dispatch({type: DETAILS, payload: id});
		dispatch({type: CITIES, payload: id});
		window.scrollTo(0, 0);
	}, [id]);
	return (
		<>
			<Helmet>
				<title>{details.name}</title>
			</Helmet>
			<Header
				heading={details.name}
				image={details.bigImage}
			></Header>
			<DestinationInfo details={details} />
			<City
				cities={selectedCity}
				name={details.name}
			/>
			<Footer />
		</>
	);
};

export default DetailsPage;
