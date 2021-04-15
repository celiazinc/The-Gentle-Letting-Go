import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react"; //import React Component
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavigationBar } from "./Pages/Navigation/Nav.js";
import { HomePage } from "./Pages/HomePage/Homepage.js";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage.js";
import { CalculatorPage } from "./Pages/CalculatorPage/CalculatorPage.js";
import { Calculator } from "./Pages/CalculatorPage/Calculator.js";
import { Result } from "./Pages/CalculatorPage/Result.js";

export class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/CalculatorPage" component={Calculator} />
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route path="/Result" component={Result} />
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
