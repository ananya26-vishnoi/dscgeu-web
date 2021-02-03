import React from "react";
import { FaGithub, FaLinkedin, FaLaptopCode, FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { SiDevDotTo } from "react-icons/si";
import { AiFillMediumSquare } from "react-icons/ai";

const TeamCard = ({ name, image, position, links }) => {
	return (
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
							onClick={() => window.open(links.website)}
						/>
					)}
					{links.github && (
						<FaGithub
							size="1.5rem"
							style={{
								cursor: "pointer",
								color: "#333",
							}}
							onClick={() => window.open(links.github)}
						/>
					)}
					{links.instagram && (
						<RiInstagramLine
							size="1.6rem"
							style={{
								cursor: "pointer",
								color: "#DF3289",
							}}
							onClick={() => window.open(links.instagram)}
						/>
					)}
					{links.linkedin && (
						<FaLinkedin
							size="1.5rem"
							style={{
								cursor: "pointer",
								color: "#4285f4",
							}}
							onClick={() => window.open(links.linkedin)}
						/>
					)}
					{links.devto && (
						<SiDevDotTo
							size="1.5rem"
							style={{
								cursor: "pointer",
								color: "#000",
							}}
							onClick={() => window.open(links.devto)}
						/>
					)}
					{links.medium && (
						<AiFillMediumSquare
							size="1.5rem"
							style={{
								cursor: "pointer",
								color: "#000",
							}}
							onClick={() => window.open(links.medium)}
						/>
					)}
					{links.twitter && (
						<FaTwitter
							size="1.5rem"
							style={{
								cursor: "pointer",
								color: "#1DA1F2",
							}}
							onClick={() => window.open(links.twitter)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default TeamCard;
