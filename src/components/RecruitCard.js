import React from "react";

const Card = ({ title, role, body, formLink, isAlert }) => {
	return (
		<div className="card">
			<div className="card-head">
				<p>{title}</p>
				<div className="bar">
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>
			</div>
			<div className="card-body">
				<div className="card-body">
					<div className="main">
						{body}
						non-technical people help understand technical concepts.
					</div>
					<div className="role">{role}</div>
				</div>
			</div>
			<div className="card-button">
				{isAlert ? (
					<div className="alert">
						Will be selected internally From Core Team Candidates
					</div>
				) : (
					<div className="alert">Applications Closed</div>
				)}
			</div>
		</div>
	);
};

export default Card;
