import React from "react";

import homeIcon from "../Images/homeIcon.svg";

export default class ScrollTopButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        className="navbar-icons home-button"
        onClick={() => this.scrollToTop()}
      >
        <img src={homeIcon} className="home-button-image" alt="Home Button" />
      </button>
    );
  }
}
