import React from "react";
import { withRouter } from "react-router-dom";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { SiDevDotTo } from "react-icons/si";
import { AiFillMediumSquare } from "react-icons/ai";

const teamMembers = [
	{
		name: "Aman Kumar Jagdev",
		position: "DSC Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aman_kumar_jagdev.png",
		links: {
			website: "https://amanjagdev.now.sh",
			instagram: "https://amanjagdev.now.sh",
			github: "https://amanjagdev.now.sh",
			linkedin: "https://amanjagdev.now.sh",
			devto: "https://amanjagdev.now.sh",
		},
	},
	{
		name: "Anant Jakhmola",
		position: "Student Mentor",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/anant_jakhmola.jpg",
		links: {
			instagram: "https://amanjagdev.now.sh",
			github: "https://amanjagdev.now.sh",
			linkedin: "https://amanjagdev.now.sh",
		},
	},
	{
		name: "Kartikay Sawhney",
		position: "Student Mentor",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/kartikay_sawhney_r6gmlMq.jpg",
		links: {
			instagram: "https://amanjagdev.now.sh",
			github: "https://amanjagdev.now.sh",
			linkedin: "https://amanjagdev.now.sh",
		},
	},
	{
		name: "Aastha Bist",
		position: "Student Mentor",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aastha_bist.jpg",
		links: {
			instagram: "https://amanjagdev.now.sh",
			github: "https://amanjagdev.now.sh",
			linkedin: "https://amanjagdev.now.sh",
		},
	},
	{
		name: "Shashwat Joshi",
		position: "Technical Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/shashwat_joshi_r53QCNu.jpg",
		links: {
			instagram: "https://www.instagram.com/_shashwatjoshi_/",
			github: "https://github.com/Shashwat-Joshi",
			linkedin: "https://www.linkedin.com/in/shashwat-joshi-076378186/",
		},
	},
	{
		name: "Priyanjali Pathak",
		position: "Master Designer",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/priyanjali_pathak.jpg",
		links: {
			instagram:
				"https://instagram.com/priya_n_jali?igshid=129llf906x6w6",
			github: "https://github.com/priyanjali18",
			linkedin: "https://www.linkedin.com/in/priyanjali-pathak-7790581ba",
		},
	},
];

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

				<div className="team-cards">
					{teamMembers.map(({ name, image, position, links }) => (
						<div key={name} className="team-card">
							<img src={image} alt="user" />
							<h3 className="name">{name}</h3>
							<h4 className="position">{position}</h4>
							<div className="social-links">
								{links.website && (
									<FaLaptopCode
										size="1.5rem"
										style={{
											color: "#3b3b3b",
										}}
										onClick={() =>
											window.open(links.website)
										}
									/>
								)}
								{links.github && (
									<FaGithub
										size="1.5rem"
										style={{
											color: "#333",
										}}
										onClick={() =>
											window.open(links.github)
										}
									/>
								)}
								{links.instagram && (
									<RiInstagramLine
										size="1.6rem"
										style={{
											color: "#DF3289",
										}}
										onClick={() =>
											window.open(links.instagram)
										}
									/>
								)}
								{links.linkedin && (
									<FaLinkedin
										size="1.5rem"
										style={{
											color: "#4285f4",
										}}
										onClick={() =>
											window.open(links.linkedin)
										}
									/>
								)}
								{links.devto && (
									<SiDevDotTo
										size="1.5rem"
										style={{
											color: "#000",
										}}
										onClick={() => window.open(links.devto)}
									/>
								)}
								{links.medium && (
									<AiFillMediumSquare
										size="1.5rem"
										style={{
											color: "#000",
										}}
										onClick={() =>
											window.open(links.medium)
										}
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default withRouter(Team);
