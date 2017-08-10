import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    let active = this.state.active;

    if (active) {
      return (
        <form className="SearchForm">
          <input className="SearchForm__input" autoFocus onChange={this.handleChange} value={this.props.value} name='search' type='text' placeholder='Pesquisar' />
          <IconButton onClick={this.handleClick} name='close' />
        </form>
      );
    }

    return (
      <IconButton onClick={this.handleClick} name='search' />
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default SearchForm;
