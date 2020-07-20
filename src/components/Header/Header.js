import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h2>
          <span>✨</span>
          {this.props.month}
          <span>✨</span>
        </h2>
      </div>
    );
  }
}

export default Header;
