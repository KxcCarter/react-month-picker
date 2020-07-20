import React, { Component } from 'react';

class MonthItem extends Component {
  clickAlert = () => {
    alert(`Selected month is ${this.props.name}`);
  };

  render() {
    return (
      <div onClick={(event) => this.props.setMonthHeader(this.props.name)}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default MonthItem;
