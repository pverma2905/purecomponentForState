import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1
    }

  }
  render() {
    console.log("check rerendering")
    return (
      <>
        <h1>Pure component {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update State
        </button>
      </>
    )
  }
}
