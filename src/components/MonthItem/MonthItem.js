import React, { Component } from 'react';

class MonthItem extends Component {
  render() {
    const displayMonth = this.props.month.map((month) => {
      return <h3>{month.name}</h3>;
    });

    return (
      <div>
        {displayMonth}
        <p>MONTH ITEM STUFF!</p>
      </div>
    );
  }
}

export default MonthItem;
