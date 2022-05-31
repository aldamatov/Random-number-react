import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lowerVal: "",
      upperVal: "",
      output: 0
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (Number(value)) {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: "" });
    }
    console.log(name);
  };

  generateRandom = () => {
    if (
      this.state.lowerVal < this.state.upperVal &&
      !isNaN(this.state.lowerVal) &&
      !isNaN(this.state.upperVal)
    ) {
      const minVal = Math.ceil(this.state.lowerVal);
      const maxVal = Math.floor(this.state.upperVal);
      const random = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);

      this.setState({
        output: random
      });
    }
  };
  handleClear = () => {
    this.setState({ lowerVal: "" });
    this.setState({ upperVal: "" });
    this.setState({ output: 0 });
  };
  render() {
    return (
      <div className="App">
        <h2>
          Your Random number is: <span>{this.state.output}</span>
        </h2>
        <div>
          <label> Lower Limit</label>
          <input
            id="lower"
            type="text"
            name="lowerVal"
            value={this.state.lowerVal}
            placeholder="Enter Lower Limit"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label> Upper Limit</label>
          <input
            id="upper"
            type="text"
            value={this.state.upperVal}
            name="upperVal"
            placeholder="Enter Upper Limit"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button id="generateBtn" onClick={this.generateRandom}>
            Generate
          </button>
          <button id="clearBtn" onClick={this.handleClear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
