import React from "react";
import { withRouter } from "react-router-dom";

const Footer = ({ history }) => {
	return (
		<div className="Footer">
			<div className="left">
				<img src={require("../assets/vectors/footer-logo.svg")} />
				<div className="copyright">
					© Developer Student Clubs Graphic Era 2020. All rights
					reserved
				</div>
			</div>
			<div className="right">
				<h3>Quick Links</h3>
				<div className="links">
					<a onClick={() => history.push("/")}>Home</a>
					<a onClick={() => history.push("/team")}>Team</a>
					<a onClick={() => history.push("/#what-we-do")}>
						What we do?
					</a>
					<a onClick={() => history.push("/join")}>Join Us</a>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Footer);
