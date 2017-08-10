import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <header className="Navbar">
        {this.props.children}
      </header>
    );
  }
}

export default Navbar;
