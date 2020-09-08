import React from "react";
import { withRouter } from "react-router-dom";

const Register = ({ history }) => {
	return (
		<div className="Join">
			<div className="container">
				<section>
					<h1>Join Developer Student Clubs Grpahic Era</h1>
					<div className="bar">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<div className="content">
						<p>
							To become a member at DSC Please follow the below
							mentioned Steps
						</p>

						<div className="help">
							<img
								src="https://static.thenounproject.com/png/16966-200.png"
								alt="bulb"
							/>
							<div className="text">
								<div className="content">
									If you get stuck just refer the detailed
									instructions for help :)
								</div>
								<div className="link">
									<a
										href="https://dscgeu.now.sh/static/dscjoin.pdf"
										target="_blank">
										Instructions PDF
									</a>
								</div>
							</div>
						</div>

						<h3>Step 1: </h3>
						<p>
							Go to the DSC Community site and register yourself
							thereand join Graphic Era DSC Page
						</p>
						<a
							className="apply"
							href="https://dsc.community.dev/graphic-era/"
							target="_blank">
							Join us on the Community Platform
						</a>
						<h3>Step 2: </h3>
						<p>
							Join the Official Telegram Group and Announcements
							channel this will make sure you stay connected with
							us to ask your doubts and for further Announcements
						</p>
						<a
							className="apply"
							href="https://t.me/joinchat/ObSwHEzzhweSjRFxR0ZxjQ"
							target="_blank">
							Join Telegram Group
						</a>
						<p className="and">AND</p>
						<a
							className="apply"
							href="https://t.me/joinchat/AAAAAFFiE--SrbJEoOfzVw"
							target="_blank">
							Join Telegram Announcements Group
						</a>
					</div>
					<div className="bar bar-bottom">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<div className="enjoy">
						<h3>All Steps Complete</h3>
						<p>🎉You are now a memeber 🎉</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default withRouter(Register);
