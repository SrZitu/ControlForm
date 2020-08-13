import React, { Component } from "react";
//import Form from "../src/mycomponent/Form";
import "./App.css";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.refs.myName.value;
    const email = this.email.value;
    const text = this.refs.myText;
    text.style.color = "red";
    console.log(name, email, text);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">Name</label>
          <input type="text" ref="myName" />
          <label htmlFor="fname">Email</label>
          <input
            type="email"
            ref={(mail) => {
              this.email = mail;
              /*passing through function,anoter way of passing value*/
            }}
          />
          <input type="submit" />
        </form>
        <p ref="myText">Hello world</p>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
export default App;
