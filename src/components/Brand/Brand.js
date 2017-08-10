import React from 'react';
import PropTypes from 'prop-types';
import './Brand.css';

class Brand extends React.Component {
  render() {
    return (
      <h1 className="Brand">
        {this.props.text}
      </h1>
    );
  }
}

Brand.propTypes = {
  text: PropTypes.string.isRequired
};

export default Brand;
