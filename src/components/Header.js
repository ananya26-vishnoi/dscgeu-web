import React from "react";
import { withRouter } from "react-router-dom";
const Header = ({ history }) => {
  const url = String(history.location.pathname);
  return (
    <div className="Header">
      <div className="logo">
        <img
          alt="Logo"
          height={60}
          onClick={() => history.push("/")}
          src={require("../assets/logo/side_color.png")}
        />
      </div>
      <div className="links">
        <div
          className={url === "/" ? "link selected" : "link"}
          onClick={() => history.push("/")}
        >
          Home
        </div>

        <div
          className={url === "/articles" ? "link selected" : "link"}
          // onClick={() => history.push("/articles")}
        >
          Articles
        </div>

        <div
          className={url === "/join" ? "link selected" : "link"}
          onClick={() => history.push("/join")}
        >
          Join
        </div>

        <div
          className={url === "/team" ? "link selected" : "link"}
          // onClick={() => history.push("/team")}
        >
          Team
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
