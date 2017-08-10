import React from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css';

function ActionButton(props) {
  return (
    <button 
      type={props.type} 
      className='ActionButton' 
      onClick={props.onAction}>
        {props.text}
    </button>
  );
}

ActionButton.defaultProps = {
  type: 'button',
};

ActionButton.propTypes = {
  onAction: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default ActionButton;
