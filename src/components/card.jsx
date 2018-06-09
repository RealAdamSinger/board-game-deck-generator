import React from 'react';

class Card extends React.PureComponent {
  render() {
    var { Title, Effect, Use, Discard } = this.props;

    return (
      <div style={{ height: '3.2in', width: '2in', padding: 3, border: "solid 1px black", display: 'inline-block', verticalAlign: "top" }}>
        <div style={{ padding: 3, width: '100%', fontWeight: "bold" }}> {Title} </div>
        <div style={{ padding: 3, width: '100%' }}> Effect: {Effect} </div>
        <div style={{ padding: 3, width: '100%' }}> Use: {Use} </div>
        <div style={{ padding: 3, width: '100%' }}> Discard: {Discard} </div>
      </div>

    )
  }
}

export default Card;