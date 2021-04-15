import React, { Component } from "react"; //import React Component

export class Calculator extends Component {
  render() {
    return (
      <section className="background-color">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}
