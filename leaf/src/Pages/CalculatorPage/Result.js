import React, { Component } from "react"; //import React Component

export class Result extends Component {
  render() {
    return (
      <section className="ResultForm">
        <div className="ResultWrapper">
          <div>
            <h2 className="ResultTitle">Result</h2>
          </div>
          <div>
            <p className="ResultText">
              Today's total carbon emission amount is
            </p>
          </div>
          <div>
            <p className="Result">30 Gallons</p>
          </div>
        </div>
        <div className="Mission-wrapper">
          <div className="row">
            <img
              src={`${process.env.PUBLIC_URL}/City.png`}
              alt="City Picture"
              id="introductionPic"></img>
          </div>
        </div>
      </section>
    );
  }
}
