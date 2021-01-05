import React from "react";
import { withRouter } from "react-router-dom";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

const Home = ({ history }) => {
	const provideData = [
		{
			icon: "icon1.svg",
			title: "Credits",
			text:
				"Wanna go for personalized learning but a paid one? This is what you recieve by participating in hands on training workshops in order to do that at absolutely no cost!",
		},
		{
			icon: "icon2.svg",
			title: "Guidance",
			text:
				"The major stuff that goes into learning has this back hand i.e. proper guidance from the already experienced lot always up for support!",
		},
		{
			icon: "icon3.svg",
			title: "Hands on Workshops",
			text:
				"Providing you with theoretical as well as practical knowledge with interactive,hands on and brainstorming workshops and sessions.",
		},
		{
			icon: "icon4.svg",
			title: "Info Sessions",
			text:
				"To boost up your knowledge we have exclusive info sessions! These provide an insight into various tech stuff you wouldn't wanna miss!",
		},
		{
			icon: "icon5.svg",
			title: "Resume",
			text:
				"The catchy portion which gleams into the eyes! Taking part in workshops and gaining experience as well as knowledge will help you build this section to the fullest!",
		},
		{
			icon: "icon6.svg",
			title: "Goodies",
			text:
				"The cool schwags no one would like to give away! So there's loads of opportunity to grab them while you learn the buzziest things in the workshops",
		},
	];

	const articleData = [
		{
			img:
				"https://miro.medium.com/max/802/1*UV6lmYquXIyAYfszxXuS4A.jpeg",
			title: "Tips for first year students And must do",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet... ",
			link:
				"https://anantjakhmola9.medium.com/here-is-all-you-need-to-know-if-you-are-studying-computer-science-c2df28dca81b",
		},
		{
			img: "https://miro.medium.com/max/465/0*XpbEAuFXeifCru4T",
			title: "Benefits of your college email and id",
			text:
				"Whenever we try to search perks for being in college we do miss something very special, and this is none other than ...",
			link:
				"https://vertika-mittal.medium.com/want-to-upgrade-your-apps-to-pro-membership-for-free-all-you-need-is-a-student-account-53197036a096",
		},
	];

	const links = {
		website: "https://dsc.community.dev/graphic-era",
		instagram: "https://instagram.com/dsc.geu",
		github: "https://github.com/dscgeu",
		linkedin: "https://www.linkedin.com/company/dscgeu",
	};

	return (
		<div className="Home">
			<img
				className="circle-grid"
				src={require("../assets/vectors/dot-grid.svg")}
				alt="circle-grid"
			/>
			<div className="container">
				<div className="left">
					<div className="left-head">
						<h2>For The Students</h2>
						<h2>By The Students</h2>
					</div>
					<img
						src={require("../assets/vectors/home1.svg")}
						className="landing-img-resp"
						alt="landing-img-resp"
					/>
					<div className="left-para">
						<p>
							We are focused on building and imparting technical
							skills to students, so that their transition to
							industry professionals becomes easier.
						</p>
					</div>

					<div className="left-button">
						<button
							className="btn"
							onClick={() => history.push("/join")}>
							<h4>Join today</h4>
						</button>
					</div>
				</div>

				<div className="right">
					<img
						src={require("../assets/vectors/home1.svg")}
						className="landing-img"
						alt="landing-img"
					/>
				</div>
			</div>

			<div className="dsc-social-links">
				<div className="bar-line"></div>
				{links.website && (
					<FaLaptopCode
						size="2rem"
						style={{
							cursor: "pointer",
							marginLeft: "2rem",
							color: "#3b3b3b",
						}}
						onClick={() => window.open(links.website)}
					/>
				)}
				{links.github && (
					<FaGithub
						size="2rem"
						style={{
							cursor: "pointer",
							marginLeft: "1rem",
							color: "#333",
						}}
						onClick={() => window.open(links.github)}
					/>
				)}
				{links.instagram && (
					<RiInstagramLine
						size="2rem"
						style={{
							cursor: "pointer",
							marginLeft: "1rem",
							color: "#DF3289",
						}}
						onClick={() => window.open(links.instagram)}
					/>
				)}
				{links.linkedin && (
					<FaLinkedin
						size="2rem"
						style={{
							cursor: "pointer",
							color: "#4285f4",
							marginLeft: "1rem",
						}}
						onClick={() => window.open(links.linkedin)}
					/>
				)}
			</div>

			<div className="container2">
				<img
					className="home-bg2"
					src={require("../assets/vectors/bubble1.svg")}
					alt="home_bg2"
				/>
				<div id="what-we-do" className="head">
					<center>
						<h1>What we can provide you?</h1>
						<h2></h2>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ac eget posuere hendrerit mattis egestas in
							dui vulputate. Sit eu nibh arcu, viverra sapien, nec
							cursus tincidunt viverra. A penatibus amet integer
							nisl et sed eget. Fermentum eu.
						</p>
					</center>
				</div>

				<div className="cards">
					{provideData.map((card) => (
						<div className="card" key={card.title}>
							<center>
								<div className="icon">
									<img
										src={require(`../assets/vectors/icons/${card.icon}`)}
									/>
								</div>
							</center>
							<div className="data">
								<h2>{card.title}</h2>
								<p>{card.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className="container3">
				<div className="head">
					<center>
						<h1>Check out our latest articles</h1>
						<h2></h2>
					</center>
				</div>

				<img
					className="dot-grid"
					src={require("../assets/vectors/dot-grid.svg")}
					alt="dot-grid"
				/>
				<div className="cards">
					{articleData.map((card) => (
						<div className="card">
							<div className="icon">
								<img
									style={{
										maxWidth: "25rem",
										maxHeight: "20rem",
										borderTopLeftRadius: "1rem",
										borderTopRightRadius: "1rem"
									}}
									className="card-img"
									alt="card"
									src={card.img}
								/>
							</div>
							<div className="data">
								<h2>{card.title}</h2>
								<p>{card.text}</p>
								<a href={card.link}>
									Read More{" "}
									<img
										src={require("../assets/vectors/arrow.svg")}
										alt="arrow"
									/>
								</a>
							</div>
						</div>
					))}
				</div>
				<img
					className="bubble2"
					src={require("../assets/vectors/bubble2.svg")}
					alt="bubble2"
				/>

				<div className="view-all">
					<center>
						<button>
							<h4>View all</h4>
						</button>
					</center>
				</div> 
			</div> */}

			<div className="container4">
				<div className="left">
					<div className="head">
						<h1>Our App</h1>
						<h3>One stop solution to all your college needs</h3>
					</div>
					<div className="bottom">
						<p>
							We are making a one stop solution for all your needs
							for the college and you will be able to navigate
							through your college like easily wit it.
						</p>
						<button>
							<h4>Coming Soon</h4>
						</button>
					</div>
				</div>
				<div className="right">
					<img
						src={require("../assets/vectors/home4.svg")}
						alt="background4"
					/>
				</div>
			</div>

			{/* <div className="container5">
				<img
					className="bg-topright"
					src={require("../assets/vectors/dot-grid.svg")}
					alt="bg-topright"
				/>
				<div className="info-card">
					<div className="head">
						<center>
							<h1>What our members are saying</h1>
						</center>
					</div>

					<div className="bottom">
						<div className="avatar">
							<img
								src={require("../assets/vectors/avatar1.svg")}
								alt="avatar"
							/>
							<div className="designation">
								<h2>Some Guy</h2>
								<h5>Member of DSC</h5>
							</div>
						</div>

						<div className="quote">
							“DSC Was awesome and gave me a great exp[erience.
							Overall i got to learn many new things and other
							stuff”
						</div>
					</div>
				</div>
				<img
					className="bg-bottomleft"
					src={require("../assets/vectors/dot-grid.svg")}
					alt="bg-bottomleft"
				/>

				<div className="navigate">
					<img
						className="back-arrow"
						src={require("../assets/vectors/back-arrow.svg")}
						alt="back-arrow"
					/>
					<div className="slider">
						<div className="dot selected"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<img
						className="forward-arrow"
						src={require("../assets/vectors/forward-arrow.svg")}
						alt="forward-arrow"
					/>
				</div>
			</div> */}
		</div>
	);
};

export default withRouter(Home);
