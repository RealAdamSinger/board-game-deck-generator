import React from 'react';
import _ from 'lodash';

import Card from './card.jsx';

class Hello extends React.PureComponent {
  render() {
    var {
      width,
      height
    } =this.props;

    return (
      <div className="flex" style={{ padding: 10 }}>
        {
          _.map(this.props.cards, (card) => {
            return <Card 
              width={width}
              height={height}
              {...card } 
            />
          })
        }
      </div>
    )
  }
}

export default Hello;
