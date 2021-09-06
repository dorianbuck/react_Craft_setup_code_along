import React, { Component } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

class App extends Component {
  state = {
    planet: "venus",
  };
  renderGreeting(event) {
    this.setState({ planet: event.target.value });
  }
  render() {
    // const planet = "mars"
    // const { planet } = this.state;
    return (
      <>
        <GreetingOutput planet={this.state.planet} />
        <GreetingInput renderGreeting={this.renderGreeting.bind(this)} />
      </>
    );
  }
}

export default App;
