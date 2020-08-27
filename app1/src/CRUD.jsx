import React, { Component } from "react";

export default class CRUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }
  //   handleSubmit() {
  //     let user = {};
  //     user.fname = this.state.fname;
  //     user.lname = this.state.lname;
  //     console.log(user);
  //   }
  handleSubmit = () => {
    let user = {};
    user.fname = this.state.fname;
    user.lname = this.state.lname;
    console.log(user);
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name :</label>
          <input
            type="text"
            name="fname"
            onChange={(event) => {
              this.handleChange(event);
            }}
            value={this.state.fname}
          />{" "}
          <br />
          <label htmlFor="lname">Last Name :</label>
          <input
            type="text"
            name="lname"
            onChange={(event) => {
              this.handleChange(event);
            }}
            value={this.state.lname}
          />{" "}
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Get User
          </button>
        </form>
      </div>
    );
  }
}
