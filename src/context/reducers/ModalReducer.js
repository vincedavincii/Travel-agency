import {OPEN_MODAL, CLOSE_MODAL} from "../types/ModalTypes";

const ModalReducer = (state, action) => {
	if (action.type === OPEN_MODAL) {
		return {modalOpen: true, current: action.payload};
	} else if (action.type === CLOSE_MODAL) {
		return {modalOpen: false, current: ""};
	} else {
		return state;
	}
};

export default ModalReducer;
