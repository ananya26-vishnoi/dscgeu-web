import React, { useState } from "react";
import dscBadge from "../assets/vectors/badge.jfif";
import { useForm } from "react-hook-form";
import firebase from "../utils/config";
import { validateEmail, validateName, validateURL } from "../utils/validators";
import "firebase/firestore";

const BadgeCollection = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [submitted, setSubmitted] = useState(false);

	const showConfirmation = () => {
		setSubmitted(true);
	};

	const onSubmit = async (uploadData) => {
		await firebase.firestore().collection("formResponses").add(uploadData);
		showConfirmation();
	};

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
							We have decided to distribute badges to our active
							members who regularly encourage us with their active
							participation in the events and discussions.
							<br />
							If you feel like you are eligible for the badges,
							fill in the required information.
						</p>
					</div>
					<form className="form" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-grp">
							<label htmlFor="fullname">Full Name</label>
							<input
								type="text"
								name="fullname"
								ref={register({ pattern: /^[a-zA-Z ]{2,30}$/ })}
							/>
						</div>
						<div className="form-grp">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="useremail"
								ref={register({
									pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
							/>
						</div>
						<div className="form-grp">
							<label htmlFor="profile-link">Profile Link</label>
							<input
								type="text"
								name="profileLink"
								ref={register({
									pattern: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
								})}
							/>
						</div>
						<ul>
							<li className="more-info">
								Google Developer Profile is a way to learn about
								Google technologies and unlock achievements.
							</li>
							<li className="more-info">
								Your profile captures your achievements with
								badges which are earned through participating in
								Google Developer communities or events.
							</li>
							<li className="more-info">
								Start redeeming your badges and when sharing on
								social media please be sure to tag @googledevs
								and @googlestudents and use
								#DeveloperStudentClubs.
							</li>
						</ul>
						<div className="coming-soon-container">
							{submitted && (
								<div className="coming-soon">
									Submitted Successfully
								</div>
							)}
						</div>
						<div className="errors">
							{errors.fullname && (
								<div className="error">
									Make sure you have filled Full Name Properly
								</div>
							)}
							{errors.useremail && (
								<div className="error">
									Make sure you have filled Email Properly
								</div>
							)}
							{errors.profileLink && (
								<div className="error">
									Make sure you have filled Profile Link
									Properly
								</div>
							)}
						</div>
						<button disabled type="submit" className="form-submit">
							Submit
						</button>
					</form>
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
