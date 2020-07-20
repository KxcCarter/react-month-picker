import React, { Component } from 'react';

class Header extends Component {
  render() {
    let weatherIcon = '';
    if (this.props.fullData.id >= 5 && this.props.fullData.id < 9) {
      console.log(this.props.fullData);
      weatherIcon = '☀️';
    } else if (this.props.fullData.id >= 9 && this.props.fullData.id < 11) {
      weatherIcon = '🍂';
    } else if (this.props.fullData.id >= 11 || this.props.fullData.id <= 4) {
      weatherIcon = '⛄️';
    }

    return (
      <div>
        <h2>
          <span>{weatherIcon}</span>
          {/* {this.props.month} */}
          {this.props.fullData.name}
          <span>{weatherIcon}</span>
        </h2>
      </div>
    );
  }
}

export default Header;
