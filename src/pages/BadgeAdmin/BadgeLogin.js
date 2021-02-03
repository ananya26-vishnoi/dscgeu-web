import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../../global/globalState";

const BadgeLogin = ({ history }) => {
	const { register, handleSubmit } = useForm();
	const [, setUser] = useRecoilState(userAtom);
	const onSubmit = (data) => {
		//TODO : check the user in firebase using firebase auth / making a temp user in firebase store
		localStorage.setItem("user", JSON.stringify(data));
		setUser(data);
		history.push("/badgeadmin");
	};

	return (
		<div className="BadgeLogin">
			<h1>Login Into the system</h1>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-grp">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" ref={register} />
				</div>
				<div className="form-grp">
					<label htmlFor="password">Password</label>
					<input type="text" name="password" ref={register} />
				</div>
				<button type="submit" className="form-submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default withRouter(BadgeLogin);
