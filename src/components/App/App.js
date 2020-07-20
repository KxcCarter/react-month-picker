import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header';

class App extends Component {
  state = {
    calendar: [],
    monthHeader: 'Click on a month!',
    selectedMonth: {
      name: '',
      id: '',
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log(`in getData`);
    axios({
      method: 'GET',
      url: '/calendar',
    })
      .then((response) => {
        this.setState({ calendar: response.data });
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  setMonthHeader = (monthData) => {
    this.setState({
      monthHeader: monthData.name,
      selectedMonth: monthData,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <Header month={this.state.monthHeader} fullData={this.state.selectedMonth} />
          <br />
        </header>
        <br />
        <p>List of months goes here</p>
        <MonthList months={this.state.calendar} setMonthHeader={this.setMonthHeader} />
      </div>
    );
  }
}

export default App;
