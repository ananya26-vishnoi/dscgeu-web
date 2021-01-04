import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="left">
        <img src={require("../assets/vectors/footer-logo.svg")} />
        <div className="copyright">
          © Developer Student Clubs Graphic Era 2020. All rights reserved
        </div>
      </div>
      <div className="right">
        <h3>Quick Links</h3>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Team</a>
          <a href="#">What we do?</a>
          <a href="#">Join Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
