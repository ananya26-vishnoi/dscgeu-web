import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ history }) => {
  const provideData = [
    {
      icon: "icon1.svg",
      title: "Credits",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis suspendisse nisi ultrices.",
    },
    {
      icon: "icon2.svg",
      title: "Guidance",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis suspendisse nisi ultrices.",
    },
    {
      icon: "icon3.svg",
      title: "Hands on Workshops",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis suspendisse nisi ultrices.",
    },
    {
      icon: "icon4.svg",
      title: "Info Sessions",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis suspendisse nisi ultrices.",
    },
    {
      icon: "icon5.svg",
      title: "Resume",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis suspendisse nisi ultrices.",
    },
    {
      icon: "icon6.svg",
      title: "Goodies",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis suspendisse nisi ultrices.",
    },
  ];

  const articleData = [
    {
      img: "img1.svg",
      title: "Tips for first year students And must do",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet... ",
      link: "#",
    },
    {
      img: "img2.svg",
      title: "Tips for first year students And must do",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet... ",
      link: "#",
    },
    {
      img: "img3.svg",
      title: "Tips for first year students And must do",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet... ",
      link: "#",
    },
  ];

  return (
    <>
      <Header />
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
                We are focused on building and imparting technical skills to
                students, so that their transition to industry professionals
                becomes easier.
              </p>
            </div>

            <div className="left-button">
              <button className="btn">
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

        <div className="container2">
          <img
            className="home-bg2"
            src={require("../assets/vectors/bubble1.svg")}
            alt="home_bg2"
          />
          <div className="head">
            <center>
              <h1>What we can provide you?</h1>
              <h2></h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eget
                posuere hendrerit mattis egestas in dui vulputate. Sit eu nibh
                arcu, viverra sapien, nec cursus tincidunt viverra. A penatibus
                amet integer nisl et sed eget. Fermentum eu.
              </p>
            </center>
          </div>

          <div className="cards">
            {provideData.map((card) => (
              <div className="card">
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

        <div className="container3">
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
                    className="card-img"
                    src={require(`../assets/vectors/img/${card.img}`)}
                  />
                </div>
                <div className="data">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <a>
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
        </div>

        <div className="container4">
          <div className="left">
            <div className="head">
              <h1>Our App</h1>
              <h3>One stop solution to all your college needs</h3>
              <h4></h4>
            </div>
            <div className="bottom">
              <p>
                We are making a one stop solution for all your needs for the
                college and you will be able to navigate through your college
                like easily wit it.
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

        <div className="container5">
          <img
            className="bg-topright"
            src={require("../assets/vectors/dot-grid.svg")}
            alt="bg-topright"
          />
          <div className="info-card">
            <div className="head">
              <center>
                <h1>What our customer are saying</h1>
                <h4></h4>
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
                “DSC Was awesome and gave me a great exp[erience. Overall i got
                to learn many new things and other stuff”
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Home);
