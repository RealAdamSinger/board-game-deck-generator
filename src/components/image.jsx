import React from 'react';

class Image extends React.PureComponent {
  render() {
    var {
      url,
      height,
      width,
      children
    } = this.props;

    return (
      <div
        style={{
          width, height,
          backgroundImage: `url(${url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </div>
    )
  }

  static defaultProps = {
    width: '100%',
    height: '100%',
  }
}

export default Image;
