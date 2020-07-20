import React, { Component } from 'react';

class MonthItem extends Component {
  clickAlert = () => {
    alert(`Selected month is ${this.props.name}`);
  };

  render() {
    return (
      <div onClick={this.clickAlert}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default MonthItem;
