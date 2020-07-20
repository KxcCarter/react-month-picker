import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthItem from '../MonthItem/MonthItem';

class App extends Component {
  state = {
    calendar: [],
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br />
        </header>
        <br />
        <p>List of months goes here</p>
        <MonthItem month={this.state.calendar} />
      </div>
    );
  }
}

export default App;
