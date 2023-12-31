import React from 'react'
import logo from './globologo.jpg'

function Header({ subtitle }) {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">
        <h1>{subtitle}</h1>
      </div>
    </header>
  )
}

/*
class component:
class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-5">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
          <h1>{this.props.subtitle}</h1>
        </div>
      </header>
    )
  }
}
*/

export default Header
