import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./webfonts/css/all.css"

import _ from "lodash";
import ReactToPrint from "react-to-print";

import Deck from "./components/deck.jsx";
import {
  FormControl,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Image from "./components/image.jsx";


const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

var units = ["in", "mm", "px"];

const defaultValue = `[
  {
    "title": "Plain Card",
    "text": "Play this to do the most generic action in the world!",
    "subtext": "Stare at Wall"
  },  {
    "title": "Danger\\nZone!",
    "titleColor": "red",
    "titleAlign": "right",
    "titleBackgroundColor": "yellow",
    "text": "Gonna take you right into the danger zone",
    "textBackgroundColor": "rgba(255,255,255,.8)",
    "textAlign": "center",
    "subtext": "Highway to the danger zone",
    "subtextColor": "white",
    "subtextBackgroundColor": "rgba(0,0,0,.5)",
    "backgroundColor": "red",
    "borderColor": "black"
  },{
    "title": "Danger Zone!",
    "titleColor": "red",
    "titleBackgroundColor": "yellow",
    "subtext": "Highway to the danger zone",
    "subtextColor": "white",
    "subtextBackgroundColor": "#ff0000",
    "backgroundColor": "red",
    "borderColor": "black",
    "image": "https://en.wikipedia.org/wiki/File:Sterling_Archer.png"
  }
]`;

class App extends React.PureComponent {
  state = {
    thickness: 0.1,
    width: 2.5,
    height: 3.5,
    unit: "in",
    value: defaultValue,
    showCutLines: true
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onUnitChange = e => {
    this.setState({
      unit: e.target.value
    });
  };

  onWidthChange = e => {
    this.setState({
      width: e.target.value
    });
  };

  onHeightChange = e => {
    this.setState({
      height: e.target.value
    });
  };

  onThicknessChange = e => {
    this.setState({
      thickness: e.target.value
    });
  };

  onToggleCutLines = e => {
    this.setState({
      showCutLines: !this.state.showCutLines
    });
  };

  componentDidMount = () => {
    document.title = "Proto-Deck Generator";
  };

  render() {
    var { value, width, height, unit, thickness, showCutLines } = this.state;

    var cardArray = [];

    if (_.isString(value)) {
      try {
        cardArray = JSON.parse(value);
      } catch (e) {
        cardArray = [];
      }
    }

    var inputJSX = (
      <div
        className="flex-middle flex-wrap"
        style={{ backgroundColor: "#EEE", padding: 3 }}
      >
        <div style={{ padding: 3 }}>
          <TextField
            label="width"
            value={width}
            onChange={this.onWidthChange}
            style={{ background: "#fff" }}
            margin="normal"
          />
        </div>
        <div style={{ padding: 3 }}>
          <TextField
            label="height"
            value={height}
            onChange={this.onHeightChange}
            style={{ background: "#fff" }}
            margin="normal"
          />
        </div>
        <div style={{ padding: "3px" }}>
          <TextField
            label="border thickness"
            value={thickness}
            onChange={this.onThicknessChange}
            style={{ background: "#fff" }}
            margin="normal"
          />
        </div>
        <div style={{ padding: 3 }}>
          <FormControl margin="normal" style={{ background: "#fff" }}>
            <InputLabel htmlFor="name-error">Unit</InputLabel>
            <Select
              value={unit}
              label="unit"
              onChange={this.onUnitChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              {_.map(units, unit => {
                return <MenuItem value={unit}>{unit}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <FormControlLabel
          control={
            <Switch
              checked={showCutLines}
              onChange={this.onToggleCutLines}
              value="checkedA"
            />
          }
          label="Cut Lines"
        />

        <div style={{ padding: 3 }}>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
        </div>
      </div>
    );

    var imageJSX = (
      <div
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          padding: 3,
          width: "100%",
          padding: 15
        }}
      >
          If you found this helpful please <a target="_blank" href="https://www.shelfclutter.com/donate"> Show Your Support</a>!
      </div>
    );

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 20
          }}
        >
          <b>A Simple Deck Generator for Board Game Prototyping!</b>
          <br />
          Created by{" "}
          <a
            href="https://boardgamegeek.com/user/adamsinger109"
            target="_blank"
          >
            Adam Singer
          </a>
          <br />
          Enjoy! (Internet Explorer not Supported, please use Chrome, Safari, or
          Firefox)
        </div>
        <div
          style={{
            display: "inline-block",
            verticalAlign: "top",
            width: "60%",
            height: "100%",
            padding: 15
          }}
        >
          <MuiThemeProvider theme={theme}>
            Try editing the sample JSON below to get a feel for how it works!
            Type \n to force a new line.
            <TextField
              id="multiline-flexible"
              label="Enter a JSON Array"
              multiline
              rowsMax="20"
              value={value}
              onChange={this.onChange}
              // margin="normal"
              style={{ backgroundColor: "#222", width: "100%" }}
            />
          </MuiThemeProvider>
          {imageJSX}
        </div>
        <div
          style={{
            padding: 10,
            display: "inline-block",
            verticalAlign: "top",
            width: "40%"
          }}
        >
          <a href="https://www.csvjson.com/csv2json" target="_blank">
            Want to edit in excel?
            Click here to convert a CSV to JSON{" "}
          </a>
          <br />
          <br />
          <b style={{ textDecoration: "underline" }}>
            Supported Attributes
          </b>{" "}
          <br />
          <b>title:</b> //title text
          <br />
          <b>titleAlign:</b> //center, left, right,
          <br />
          <b>titleColor:</b> //title text color
          <br />
          <b>titleBackgroundColor:</b> //title text background color,
          <br />
          <br />
          <b>text:</b> //middle text,
          <br />
          <b>textAlign:</b> //center, left, right,
          <br />
          <b>textColor:</b> //middle text color,
          <br />
          <b>textBackgroundColor:</b> //middle text background color,
          <br />
          <br />
          <b>subtext:</b> //lower text,
          <br />
          <b>subtextAlign:</b> //center, left, right,
          <br />
          <b>subtextColor:</b> //lower text color,
          <br />
          <b>subtextBackgroundColor:</b> //lower text background color,
          <br />
          <br />
          <b>backgroundColor</b> //card main background color, <br />
          <b>borderColor</b> //card main border color
          <br />
          <b>image</b> //put the url of a web hosted image here
          <br />
        </div>
        {inputJSX}

        <div ref={el => (this.componentRef = el)}>
          <Deck
            borderThickness={thickness + unit}
            height={height + unit}
            width={width + unit}
            cards={cardArray}
            cutLines={showCutLines}
          />
        </div>

      </div>
    );
  }
}

export default App;
