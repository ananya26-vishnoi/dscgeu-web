import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register = ({ history }) => {
  return (
    <>
      <Header />
      <div className="Join">
        <div className="container">
          <section>
            <h1>Join Developer Student Clubs Graphic Era</h1>
            <div className="bar">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="content">
              <p>
                To become a member at DSC Please follow the below mentioned
                Steps
              </p>

              <div className="help">
                <img
                  src="https://static.thenounproject.com/png/16966-200.png"
                  alt="bulb"
                />
                <div className="text">
                  <div className="content">
                    If you get stuck just refer the detailed instructions for
                    help :)
                  </div>
                  <div className="link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dscgeu.now.sh/static/dscjoin.pdf"
                    >
                      Instructions PDF
                    </a>
                  </div>
                </div>
              </div>

              <h3>Step 1: </h3>
              <p>
                Go to the DSC Community site and register yourself there and
                join Graphic Era DSC Page
              </p>
              <a
                className="apply"
                href="https://dsc.community.dev/graphic-era/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us on the Community Platform
              </a>
              <h3>Step 2: </h3>
              <p>
                Join the Official Telegram Group and Announcements channel this
                will make sure you stay connected with us to ask your doubts and
                for further Announcements
              </p>
              <a
                className="apply"
                href="https://t.me/joinchat/ObSwHEzzhweSjRFxR0ZxjQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram Group
              </a>
              <p className="and">AND</p>
              <a
                className="apply"
                href="https://t.me/joinchat/AAAAAFFiE--SrbJEoOfzVw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram Announcements Group
              </a>
            </div>
            <div className="bar bar-bottom">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="enjoy">
              <h3>All Steps Complete</h3>
              <p>🎉You are now a memeber 🎉</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Register);
