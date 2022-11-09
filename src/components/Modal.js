import React, {useContext} from "react";
import ModalContext from "../context/ModalContext";
import {CLOSE_MODAL} from "../context/types/ModalTypes";

const Modal = (props) => {
	const {state, dispatch} = useContext(ModalContext);

	const closeModalCheck = (e) => {
		if (e.target.getAttribute("class") === "modal") {
			dispatch({type: CLOSE_MODAL});
		}
	};
	return state.modalOpen && state.current === props.current ? (
		<div
			onClick={closeModalCheck}
			className="modal"
		>
			<div className="modal_body">{props.children}</div>
		</div>
	) : (
		""
	);
};

export default Modal;
