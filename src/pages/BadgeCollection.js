import React, { useState } from "react";
import dscBadge from "../assets/vectors/badge.jfif";

import firebase from "../utils/config";
import "firebase/firestore";

const BadgeCollection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const resetState = () => {
    setName("");
    setEmail("");
    setProfileLink("");
  };

  const disableFields = () => {
    setDisabled(true);
  };

  const showConfirmation = () => {
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadData = { name, email, profileLink };
    await firebase.firestore().collection("formResponses").add(uploadData);
    showConfirmation();
    disableFields();
  };

  return (
    <div className="BadgeCollection">
      <div className="container">
        <div className="left">
          <div className="head">
            <h1>Collect your badge</h1>
            <p>
              We have decided to distribute badges to our active members who
              regularly encourage us with their active participation in the
              events and discussions.
              <br />
              If you feel like you are eligible for the badges, fill in the
              required information.
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grp">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                disabled={disabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-grp">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-grp">
              <label htmlFor="profile-link">Profile Link</label>
              <input
                type="text"
                disabled={disabled}
                value={profileLink}
                onChange={(e) => setProfileLink(e.target.value)}
              />
            </div>
            <ul>
              <li className="more-info">
                Google Developer Profile is a way to learn about Google
                technologies and unlock achievements.
              </li>
              <li className="more-info">
                Your profile captures your achievements with badges which are
                earned through participating in Google Developer communities or
                events.
              </li>
              <li className="more-info">
                Start redeeming your badges and when sharing on social media
                please be sure to tag @googledevs and @googlestudents and use
                #DeveloperStudentClubs.
              </li>
            </ul>
            <div className="coming-soon-container">
              {submitted && (
                <div className="coming-soon">Submitted Successfully</div>
              )}
            </div>
            <button disabled={disabled} className="form-submit">
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
