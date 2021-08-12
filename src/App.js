import React, { Component } from "react";

const App = () => {return <Counter></Counter>}
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButtton = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButtton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButtton}>+1</button>
        <button onClick={this.handleMinusButtton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
