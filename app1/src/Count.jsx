import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  changeCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.changeCount();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
