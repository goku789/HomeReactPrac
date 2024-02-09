import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    // this.setState({
    //   counter: this.state.counter + 1,
    // },()=>{
    //     console.log('Call back value',this.state.counter);
    // });
    // console.log(this.state.counter);

    this.setState((prevState) => ({
        counter:prevState.counter+1
    }))
  }
  reset() {
    this.setState({
      counter: 0,
    });
  }

  incrementfive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div> Counter-{this.state.counter}</div>
        <button onClick={() => this.incrementfive()}>increment</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}
