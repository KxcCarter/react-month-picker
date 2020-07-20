import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
  render() {
    const displayMonth = this.props.months.map((item) => {
      return (
        <MonthItem key={item.id} name={item.name} setMonthHeader={this.props.setMonthHeader} />
      );
    });
    return <div>{displayMonth}</div>;
  }
}

export default MonthList;
