import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Deck from './components/deck.jsx';
import TextField from '@material-ui/core/TextField'

class App extends Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState( {
      value: e.target.value
    })
  }

  render() {
    var {
      value
    } = this.state;
    
    var cardArray = [];
    try {
        cardArray = JSON.parse(value);
    } catch (e) {
        cardArray=[];
    }

    return (
      <div>
        <TextField
          id="multiline-flexible"
          label="Multiline"
          multiline
          // rowsMax="4"
          value={this.state.value}
          onChange={this.handleChange}
          // className={classes.textField}
          margin="normal"
        />
        <Deck
          cards={cardArray}
        />
      </div>
    );
  }
}

export default App;
