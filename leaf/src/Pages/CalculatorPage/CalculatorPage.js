import React, { Component } from "react"; //import React Component
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { Calculator } from "./Calculator";
import { Result } from "./Result";

export class CalculatorPage extends Component {
  render() {
    return (
      <section className="background-color">
        {/* <Switch>
          <Route path="/Calculator" component={Calculator} />
          <Route path="/Result" component={Result} />
        </Switch> */}
        <Calculator />
      </section>
    );
  }
}
