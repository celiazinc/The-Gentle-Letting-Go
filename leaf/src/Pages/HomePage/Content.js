import React, { Component } from "react"; //import React Component
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactPlayer from "react-player";

export class Content extends Component {
  render() {
    return (
      <div id="root">
        <div className="Mission-wrapper">
          <div className="row">
            <div className="statement col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
              <div className="row">
                <div>
                  <p className="row Statement-text">
                    Together with Leaf, we can all contribute to saving our
                    Earth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
              {/* <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img> */}
            </div>
          </div>
        </div>

        <div className="Mission-wrapper">
          <div className="row">
            <div className="FeatureTitle row">
              <h3>Why?</h3>
            </div>
            <div className="col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
              {/* <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img> */}
            </div>
            <div className="statement col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
              <div className="row">
                <div>
                  <p className="row Statement-text">
                    Transportation carbon emission caused 28% portion of
                    greenhouse gas emissions in the U.S. On the other hand, the
                    United States is the global leader in food waste, with
                    nearly 40 million tons of food every year. Our earth is at a
                    critical stage where everyone of us should contribute to
                    protect our homeland.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Mission-wrapper">
          <div className="row">
            <div className="FeatureTitle row">
              <h3>How can Leaf Help?</h3>
            </div>
            <div className="row">
              <div className="statement col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
                <div className="row">
                  <div>
                    <p className="row Statement-text">
                      Carbon Footprint calculator can help you calculate your
                      carbon footprint everyday in the most efficent way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
                {/* <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img> */}
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
                {/* <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img> */}
              </div>
              <div className="statement col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
                <div className="row">
                  <div>
                    <p className="row Statement-text">
                      Our insight page can help you see your progress and
                      ranking amoung all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="statement col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
                <div className="row">
                  <div>
                    <p className="row Statement-text">
                      Collect Points, and use those point to plant a real tree
                      in real life. Take actions to help this world!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
                {/* <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img> */}
              </div>
            </div>
          </div>
        </div>

        <div className="Intro-Video-Wrapper">
          <div className="row">
            <div className="Video-Wrapper col-auto col-sm-auto col-md-6 col-lg-6">
              {/* <ReactPlayer
                className="Video"
                url="https://youtu.be/kvNyZLYb0lk"
                width={350}
                height={250}
              /> */}
            </div>
            <div className="Join-statement col-auto col-sm-auto col-md-6 col-lg-6">
              <h4>Watch this video to learn more about us!</h4>
            </div>
          </div>
        </div>

        <div className="Intro-Video-Wrapper">
          <div className="row">
            <button className="Nav-button" size="sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}
