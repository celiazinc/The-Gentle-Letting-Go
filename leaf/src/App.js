import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react"; //import React Component
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavigationBar } from "./Pages/Navigation/Nav.js";
import { HomePage } from "./Pages/HomePage/Homepage.js";
// import { CalculatorPage } from "./Pages/CalculatorPage/Calculator.js";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage.js";

export class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/CalculatorPage" component={CalculatorPage} /> */}
          <Route path="/ProfilePage" component={ProfilePage} />
          {/* <Route
            path="/Login"
            render={(props) => (
              <LoginWithRouter
                {...props}
                toggleLoginState={this.toggleLoginState}
              />
            )}
          /> */}
        </Switch>
      </Router>
    );
  }
}

{
  /* <NavigationBar isLogin={this.state.isLogin} /> */
}
