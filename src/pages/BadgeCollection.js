import React, { useState } from "react";
import dscBadge from "../assets/vectors/badge.jfif";

const BadgeCollection = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profileLink, setProfileLink] = useState("");

	return (
		<div className="BadgeCollection">
			<div className="container">
				<div className="left">
					<div className="coming-soon-container">
						<div className="coming-soon">COMING SOON</div>
						<div className="coming-soon-text">
							You all will be able to claim your badges very soon.{" "}
							<br />
							<strong>
								NOTE : YOU NEED TO HAVE ATTENED ATLEAST ONE
								EVENT TO CLAIM YOUR BADGE
							</strong>
						</div>
					</div>
					<div className="head">
						<h1>Collect your badge</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ducimus excepturi doloremque molestiae modi
							necessitatibus possimus accusamus. Veniam alias amet
							quae.
						</p>
					</div>
					<div className="form">
						<div className="form-grp">
							<label htmlFor="fullname">Full Name</label>
							<input
								disabled
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-grp">
							<label htmlFor="email">Email</label>
							<input
								disabled
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-grp">
							<label htmlFor="profile-link">Profile Link</label>
							<input
								disabled
								type="email"
								value={profileLink}
								onChange={(e) => setProfileLink(e.target.value)}
							/>
						</div>
						<ul>
							<li className="more-info">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Iusto, laboriosam.
							</li>
							<li className="more-info">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Iusto, laboriosam.
							</li>
						</ul>
						<button className="form-submit">Submit</button>
					</div>
				</div>
				<div className="right">
					<div className="main-vector">
						<img src={dscBadge} alt="dscBagde" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeCollection;
