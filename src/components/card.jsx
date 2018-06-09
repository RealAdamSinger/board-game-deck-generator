import React from 'react';

class Card extends React.PureComponent {
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
      subtextBackgroundColor
    } = this.props;

    return (
      <div
        className="flex-middle flex-col justify-space-between"
        style={{
          color,
          height,
          width,
          padding: 3,
          border: "solid 1px black",
          backgroundColor
        }}
      >
        <div
          style={{
            padding: 3,
            width: '100%',
            fontWeight: "bold",
            color: titleColor,
            backgroundColor: titleBackgroundColor
          }}
        >
          {title}
        </div>
        <div
          style={{
            padding: 3,
            width: '100%',
            color: textColor,
            backgroundColor: textBackgroundColor
          }}
        >
          {text}
        </div>
        <div
          style={{
            padding: 3,
            width: '100%',
            color: subtextColor,
            backgroundColor: subtextBackgroundColor
          }}
        >
          {subtext}
        </div>
      </div>
    )
  }
}

export default Card;