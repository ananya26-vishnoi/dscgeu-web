import React from "react";
import { withRouter } from "react-router-dom";
import TeamCard from "../components/TeamCard";

import {
	mainMembers,
	techLeads,
	creativeAndOutreachTeam,
} from "../data/teamDetails";
const Team = ({ history }) => {
	return (
		<div className="Team">
			<img
				className="circle-grid"
				src={require("../assets/vectors/dot-grid.svg")}
				alt="circle-grid"
			/>
			<div className="container">
				<div className="head">
					<h1>DSC Core Team</h1>
					<p>
						These are the people responsible to bring you what we
						have!!!
					</p>
					<h2></h2>
				</div>

				<section className="team-section">
					<div className="team-cards">
						{mainMembers.map((e) => (
							<TeamCard {...e} />
						))}
					</div>
				</section>
				<section className="team-section">
					<h1 className="team-section-heading">Technical Leads</h1>
					<h2 className="bar"></h2>
					<div className="team-cards">
						{techLeads.map((e) => (
							<TeamCard {...e} />
						))}
					</div>
				</section>
				<section className="team-section">
					<h1 className="team-section-heading">
						Creative and Outreach Team
					</h1>
					<h2 className="bar"></h2>
					<div className="team-cards">
						{creativeAndOutreachTeam.map((e) => (
							<TeamCard {...e} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default withRouter(Team);
