import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    let isFocused = this.props.focus ? 'Card--focused' : '';
    return (
      <div className={['Card', isFocused].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

Card.defaultProps = {
  focus: false
};

Card.propTypes = {
  focus: PropTypes.bool
};

export default Card;
