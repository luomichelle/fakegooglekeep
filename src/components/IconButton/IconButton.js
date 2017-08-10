import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './IconButton.css';

class IconButton extends React.Component {
  render() {
    return (
      <button 
        className={['IconButton', this.props.className].join(' ')} 
        onClick={this.props.onClick}>
          <Icon  name={this.props.name} />
      </button>
    );
  }
}

IconButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default IconButton;
