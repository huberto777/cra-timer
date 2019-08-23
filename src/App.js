import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.int = setInterval(
      () =>
        this.setState({
          time: new Date()
        }),
      1000
    );
    // console.log("komponent zamontowany");
  }

  componentWillUnmount() {
    clearInterval(this.int);
  }

  render() {
    return <div className="App">{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default App;
