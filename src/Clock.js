import { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return this.state.time.toLocaleString();
  }
}

export default Clock;
