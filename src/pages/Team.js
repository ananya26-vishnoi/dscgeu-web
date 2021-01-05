import React from "react";
import { withRouter } from "react-router-dom";
import { FaGithub, FaLinkedin, FaLaptopCode, FaTwitter } from "react-icons/fa";
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
			instagram: "https://instagram/amankrjagdev",
			github: "https://github.com/amanjagdev",
			linkedin: "https://linkedin.com/in/amanjagdev",
			devto: "https://dev.to/amanjagdev",
		},
	},
	{
		name: "Anant Jakhmola",
		position: "Student Mentor",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/anant_jakhmola.jpg",
		links: {
			github: "https://github.com/anantjakhmola",
			linkedin: "https://linkedin.com/in/anantjakhmola9",
			medium: "https://anantjakhmola9.medium.com/",
		},
	},
	{
		name: "Kartikay Sawhney",
		position: "Student Mentor",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/kartikay_sawhney_r6gmlMq.jpg",
		links: {
			instagram: "https://www.instagram.com/kartikay_sawhney/",
			github: "https://github.com/kartikay1506",
			linkedin: "https://www.linkedin.com/in/kartikay-sawhney-1b5b83175/",
			medium: "https://medium.com/@kartikaysawhney1506",
			devto: "https://dev.to/kartikay1506",
		},
	},
	{
		name: "Aastha Bist",
		position: "Student Mentor",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aastha_bist.jpg",
		links: {
			github: "http://github.com/bistaastha",
			linkedin: "https://www.linkedin.com/in/bistaastha",
		},
	},
	{
		name: "Shashwat Joshi",
		position: "Technical Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/shashwat_joshi_r53QCNu.jpg",
		links: {
			instagram: "https://instagram.com/_shashwatjoshi_/",
			github: "https://github.com/Shashwat-Joshi",
			linkedin: "https://linkedin.com/in/shashwat-joshi-076378186/",
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
			linkedin: "https://linkedin.com/in/priyanjali-pathak-7790581ba",
		},
	},
	{
		name: "Arnav Jain",
		position: "Management",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/arnav_jain_ZK5U29T.jpeg",
		links: {
			instagram: "https://www.instagram.com/arnav._.jain_/",
			linkedin: "https://linkedin.com/in/arnav-jain-b988471a0",
		},
	},
	{
		name: "Vertika Mittal",
		position: "Editor In Chief",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vertika_mittal_nHc30SY.jpg",
		links: {},
	},
	{
		name: "Ayush Kashyap",
		position: "Technical Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ayush_kashyap_25baP18.jpg",
		links: {
			website: "http://ayushk.dx.am/",
			instagram: "https://instagram.com/ayushhhkk",
			github: "https://github.com/ayushk01",
			linkedin: "https://linkedin.com/in/ayushk01",
			twitter: "https://twitter.com/ayushhhkk",
		},
	},
	{
		name: "Kumar Harsh",
		position: "Technical Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/kumar_harsh_dqV2rRe.jpg",
	},
	{
		name: "Aarushi Chopra",
		position: "Student Representative",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aarushi_chopra_70XKObO.jpg",
	},
	{
		name: "Tanya Chetna Vaish",
		position: "Technical Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/tanya_chetna_vaish_Hc22Ndj.jpeg",
		links: {
			instagram: "https://www.instagram.com/tanya_chetna_vaish/",
			github: "https://github.com/TanyaChetnaVaish",
			linkedin:
				"https://www.linkedin.com/in/tanya-chetna-vaish-39902a1a2/",
		},
	},
	{
		name: "Ria Goel",
		position: "Technical Lead",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ria_goel.jpeg",
	},
	{
		name: "Alka Singh",
		position: "Social Media Manager",
		image:
			"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/alka_singh.jpg",
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
							{links && (
								<div className="social-links">
									{links.website && (
										<FaLaptopCode
											size="1.5rem"
											style={{
												cursor: "pointer",
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
												cursor: "pointer",
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
												cursor: "pointer",
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
												cursor: "pointer",
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
												cursor: "pointer",
												color: "#000",
											}}
											onClick={() =>
												window.open(links.devto)
											}
										/>
									)}
									{links.medium && (
										<AiFillMediumSquare
											size="1.5rem"
											style={{
												cursor: "pointer",
												color: "#000",
											}}
											onClick={() =>
												window.open(links.medium)
											}
										/>
									)}
									{links.twitter && (
										<FaTwitter
											size="1.5rem"
											style={{
												cursor: "pointer",
												color: "#1DA1F2",
											}}
											onClick={() =>
												window.open(links.twitter)
											}
										/>
									)}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default withRouter(Team);
