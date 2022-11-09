import {useReducer, useState} from "react";
import ModalContext from "../ModalContext";
import ModalReducer from "../reducers/ModalReducer";

import React from "react";

const ModalProvider = (props) => {
	const [state, dispatch] = useReducer(
		ModalReducer,

		{modalOpen: false, current: ""}
	);

	return (
		<ModalContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
