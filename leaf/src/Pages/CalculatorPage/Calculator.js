import React, { Component } from "react"; //import React Component
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { Result } from "./Result";

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
      mile: 0,
      gallon: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* handleChange(event) {
    this.setState({ value: event.target.value });
  } */

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="CalculatorForm">
        <section>
          <div>
            <button type="button" class="btn btn-default">
              Car
            </button>
          </div>
          <div className="dropzone">
            <form onSubmit={this.handleSubmit}>
              <div className="Questions">
                <label>Which vehicle do you use today?:</label>
                <select
                  name="car"
                  className="DropdownMenu"
                  value={this.state.car}
                  onChange={this.handleInputChange}>
                  <option value="audi-a4-av8">Audi A4 Automatic</option>
                  <option value="bmw-328i-xdrive-a8">
                    BMW 328i xDrive Automatic
                  </option>
                  <option value="ford-mustang-3.7-m6">
                    Ford Mustang 3.7 Manuel
                  </option>
                </select>
              </div>

              <div className="Questions">
                <label>
                  How many miles have you driven today? (Estimation)
                </label>
                <br></br>
                <input
                  type="number"
                  name="mile"
                  className="inputBox"
                  value={this.state.mile}
                  onChange={this.handleInputChange}
                />
                <label> Miles</label>
              </div>
              <div className="Questions">
                <label>Did you refill gas today? (Put 0 if NO)</label>
                <br></br>
                <input
                  type="number"
                  name="gallon"
                  className="inputBox"
                  value={this.state.gallon}
                  onChange={this.handleInputChange}
                />
                <label> Gallon</label>
              </div>
              <div className="Questions">
                <Link to="/Result">
                  <input
                    className="Sign-in-up-button"
                    size="sm"
                    type="Submit"
                    value="Calculate"
                  />
                </Link>
              </div>
            </form>
          </div>
        </section>
        <div className="Mission-wrapper">
          <div className="row">
            <img
              src={`${process.env.PUBLIC_URL}/City.png`}
              alt="City Picture"
              id="introductionPic"></img>
          </div>
        </div>
      </div>
    );
  }
}
