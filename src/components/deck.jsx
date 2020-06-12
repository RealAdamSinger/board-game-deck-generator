import React from 'react';
import _ from 'lodash';

import Card from './card.jsx';

class Deck extends React.PureComponent {
  render() {
    var {
      borderThickness,
      width,
      height,
      cutLines
    } = this.props;

    return (
      <div className="" style={{ padding: 10 }}>
        {
          _.map(this.props.cards, (card) => {
            return (
              <Card
                borderThickness={borderThickness}
                width={width}
                height={height}
                cutLines={cutLines}
                {...card}
              />
            )
          })
        }
      </div>
    )
  }
}

export default Deck;
