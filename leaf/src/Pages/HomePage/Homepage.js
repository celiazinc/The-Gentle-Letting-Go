import React, { Component } from "react"; //import React Component
import { Content } from "./Content";

export class HomePage extends Component {
  render() {
    return (
      <section className="background-color">
        <Content />
      </section>
    );
  }
}
