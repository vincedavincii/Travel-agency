import React, {useContext, useState} from "react";
import ModalContext from "../context/ModalContext";
import {OPEN_MODAL} from "../context/types/ModalTypes";

const Login = (props) => {
	const {dispatch} = useContext(ModalContext);
	const [state, setState] = useState({
		email: "",
		password: "",
	});

	const loginHandler = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={loginHandler}>
			<div className="modal_heading">
				<h3>Login</h3>
			</div>

			<div className="group">
				<input
					type="email"
					name=""
					className="group_control"
					placeholder="Enter email"
					onChange={(e) => setState({...state, email: e.target.value})}
					value={state.email}
				/>
			</div>
			<div className="group">
				<input
					type="password"
					name=""
					className="group_control"
					placeholder="Enter password"
					onChange={(e) => setState({...state, password: e.target.value})}
					value={state.password}
				/>
			</div>
			<div className="group flex space-between y-center">
				<input
					type="submit"
					name=""
					className="btn-dark"
					value="Login"
				/>
				<span
					onClick={() =>
						dispatch({type: OPEN_MODAL, payload: props.currentModal})
					}
				>
					Create new account{" "}
				</span>
			</div>
		</form>
	);
};

export default Login;
