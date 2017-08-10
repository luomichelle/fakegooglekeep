import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

class Icon extends React.Component {
  render() {
    return (
      <i className="Icon">{this.props.name}</i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
