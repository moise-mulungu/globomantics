import { Component } from 'react'

class Greetings extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
      </div>
    )
  }
}

export default Greetings