import React from "react";
import { withRouter } from "react-router-dom";
import { FaTelegramPlane, FaLightbulb, FaHandPeace } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

const Register = ({ history }) => {
	return (
		<div className="Join">
			<img
				className="circle-grid"
				src={require("../assets/vectors/dot-grid.svg")}
				alt="circle-grid"
			/>
			<div className="container">
				<div className="head">
					<h1>Join us</h1>
					<p>Follow the steps below to become a member</p>
					<h2></h2>
				</div>

				<div className="help">
					<div className="bulb">
						<FaLightbulb size={50} />
					</div>
					<div className="text">
						<div className="content">
							If you get stuck just refer the detailed
							instructions for help :)
						</div>
						<div className="link">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://dscgeu.now.sh/static/dscjoin.pdf">
								Instructions PDF
							</a>
						</div>
					</div>
				</div>

				<div className="cards">
					<div className="card">
						<h3>Step 1: </h3>
						<p>
							Go to the DSC Community site and register yourself
							there and join Graphic Era DSC Page
						</p>
						<a
							href="https://dsc.community.dev/graphic-era/"
							target="_blank"
							rel="noopener noreferrer"
							className="join-btn">
							<div className="text">
								Join us on the Community Platform
							</div>
							<FaHandPeace />
						</a>
					</div>
					<div className="card">
						<h3>Step 2: </h3>
						<p>
							Join the Official Telegram Group and Announcements
							channel this will make sure you stay connected with
							us to ask your doubts and for further Announcements
						</p>
						<a
							href="https://t.me/joinchat/ObSwHEzzhweSjRFxR0ZxjQ"
							target="_blank"
							rel="noopener noreferrer"
							className="join-btn">
							<div className="text">Join Telegram Group</div>
							<FaTelegramPlane />
						</a>
						<a
							href="https://t.me/joinchat/AAAAAFFiE--SrbJEoOfzVw"
							target="_blank"
							rel="noopener noreferrer"
							className="join-btn">
							<div className="text">
								Join Telegram Announcements Group
							</div>
							<FaTelegramPlane />
						</a>
					</div>
					<div className="card">
						<h3>Step Furthur: </h3>
						<p className="highlight">
							Join us on our discord server if you are highly
							enthusiastic
						</p>
						<p>Join our discord server for more awesomenewss</p>
						<a
							href="https://discord.gg/5VuSjRH4Ba"
							target="_blank"
							rel="noopener noreferrer"
							className="join-btn"
							style={{ background: "#7289DA" }}>
							<div className="text">Join Discord Server</div>
							<RiDiscordFill />
						</a>
					</div>
				</div>

				<h2 className="bar" />
				<div className="enjoy">
					<h3>All Steps Complete</h3>
					<p>🎉You are now a memeber 🎉</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Register);
