import React from 'react';
import logo from './logo.svg';
import './App.css';

import _ from 'lodash';

import ReactToPrint from 'react-to-print';
import Deck from './components/deck.jsx';
import { FormControl, TextField, MenuItem, Select, InputLabel } from '@material-ui/core'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

var units = ['in', 'mm']

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
const defaultValue = `[
  {
    "title": "Danger Zone!",
    "titleColor": "red",
    "text": "Gonna take you right into the danger zone",
    "subtext": "Highway to the danger zone",
    "backgroundColor": "red",
    "titleBackgroundColor": "yellow",
    "textBackgroundColor": "rgba(255,255,255,.5)",
    "subtextBackgroundColor": "rgba(0,0,0,.5)",
    "subtextColor": "white"
  },
  {
    "title": "Plain Card",
    "text": "Play this to do the most generic action in the world!",
    "subtext": "Stare at Wall"
  }
]`;

class App extends React.PureComponent {

  state = {
    width: 2.5,
    height: 3.5,
    unit: 'in',
    value: defaultValue
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onUnitChange = (e) => {
    this.setState({
      unit: e.target.value
    })
  }

  onWidthChange = (e) => {
    this.setState({
      width: e.target.value
    })
  }

  onHeightChange = (e) => {
    this.setState({
      height: e.target.value
    })
  }

  render() {
    var {
      value,
      width,
      height,
      unit
    } = this.state;

    var cardArray = [];

    if (_.isString(value)) {
      try {
        cardArray = JSON.parse(value);
      } catch (e) {
        cardArray = [];
      }
    }

    return (
      
      <div style={{width:'100%', height:'100%', padding:3}}>
      <MuiThemeProvider theme={theme}>
        <TextField
          id="multiline-flexible"
          label="Enter a JSON Array"
          multiline
          rowsMax="14"
          value={value}
          onChange={this.onChange}
          // className={classes.textField}
          margin="normal"
          style={{ backgroundColor: '#222', width: "100%" }}
        />
        </MuiThemeProvider>
        <div className="flex-middle" style={{backgroundColor: '#EEE', padding: 3 }}>
        <div style={{ padding: 3, }}>
          <TextField
            label="width"
            value={width}
            onChange={this.onWidthChange}
            // className={classes.textField}
            style={{ background: "#fff" }}
            margin="normal"
          />
          </div>
          <div style={{ padding: 3 }}>
          <TextField
            label="height"
            value={height}
            onChange={this.onHeightChange}
            // className={classes.textField}
            style={{ background: "#fff" }}
            margin="normal"
          />
          </div>
          <div style={{ padding: 3 }}>
          <FormControl margin="normal"style={{ background: "#fff" }}>
                    <InputLabel htmlFor="name-error">Name</InputLabel>
          <Select
                      value={unit}
            label="unit"
            onChange={this.onUnitChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            {_.map(units, (unit) => {
              return <MenuItem value={unit}>{unit}</MenuItem>
            })}
          </Select>
          </FormControl>
        </div>
                <div style={{padding:3}}>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        </div>
        </div>
        <div ref={el => (this.componentRef = el)}>
        <Deck
          height={height + unit}
          width={width + unit}
          cards={cardArray}
        />
      </div>
      </div>
    );
  }
}

export default App;
