import React, {useContext, useReducer} from "react";
import DestinationContext from "../DestinationContext";
import DestionationReducer from "../reducers/DestionationReducer";
import {destinations} from "../../data/destinations";
import Cities from "../../data/cities";

const DestinationProvider = (props) => {
	const [destinationData, dispatch] = useReducer(DestionationReducer, {
		destinations,
		details: {},
		cities: Cities,
		selectedCity: [],
	});

	return (
		<DestinationContext.Provider value={{destinationData, dispatch}}>
			{props.children}
		</DestinationContext.Provider>
	);
};

export default DestinationProvider;
