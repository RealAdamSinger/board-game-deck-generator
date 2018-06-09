import React from 'react';
import _ from 'lodash';

import Card from './card.jsx';

class Hello extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: 10 }}>
        {
          _.map(this.props.cards, (card) => {
            return <Card {...card} />
          })
        }
      </div>
    )
  }
}

export default Hello;
