import React from "react";
import Image from "./image.jsx";
import _ from "lodash";

class Card extends React.PureComponent {
  parseText = text => {
    var x = _.chain(text)
      .split("\n")
      .map(line => {
        return [line, <br />];
      })
      .flatten()
      .value();

    return x;
  };

  render() {
    var {
      title,
      text,
      subtext,
      height,
      width,
      color,
      backgroundColor,
      titleColor,
      titleBackgroundColor,
      textColor,
      textBackgroundColor,
      subtextColor,
      subtextBackgroundColor,
      borderColor = "white",
      borderThickness,
      image,
      cutLines,
      titleAlign,
      textAlign,
      subtextAlign,
      flip,
      textIcon,
      subtextIcon
    } = this.props;

    return (
      <div
        className={flip && "flip"}
        style={{
          border: cutLines && "dashed 1px black",
          display: "inline-block",
          verticalAlign: "top",
          height,
          width
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor,
            position: "relative"
          }}
        >
          {image && <Image url={image} />}
          <div
            className="flex-middle flex-col justify-space-between "
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              color,
              border: `solid ${borderThickness} ${borderColor}`
            }}
          >
            {title && (
              <div
                style={{
                  width: "100%",
                  fontWeight: "bold",
                  color: titleColor,
                  textAlign: titleAlign,
                  backgroundColor: titleBackgroundColor
                }}
              >
                <div style={{ padding: 3 }}>{this.parseText(title)}</div>
              </div>
            )}
            {text && (
              <div
                className={textIcon && "fas"}
                style={{
                  width: "100%",
                  color: textColor,
                  textAlign: textAlign,
                  backgroundColor: textBackgroundColor
                }}
              >
                <div style={{ padding: 3 }}>{this.parseText(text)}</div>
              </div>
            )}
            {subtext && (
              <div
                className={subtextIcon && "fas"}
                style={{                  
                  width: "100%",
                  color: subtextColor,
                  textAlign: subtextAlign,
                  backgroundColor: subtextBackgroundColor
                }}
              >
                <div style={{ padding: 3 }}>{this.parseText(subtext)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
