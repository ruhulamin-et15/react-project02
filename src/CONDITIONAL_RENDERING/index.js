import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  // //use if else
  // render() {
  //   const { isLoggedIn } = this.state;
  //   let element;
  //   if (isLoggedIn) {
  //     element = <HomePage />;
  //   } else {
  //     element = <LoginPage />;
  //   }
  //   return <div>{element}</div>;
  // }

  // use ternary operator = easy
  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        {isLoggedIn ? <HomePage /> : <LoginPage />}

        {/* use short ckt */}
        {/* {isLoggedIn && <HomePage />} */}
      </>
    );
  }
}
