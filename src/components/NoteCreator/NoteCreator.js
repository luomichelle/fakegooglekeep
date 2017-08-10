import React from 'react';
import PropTypes from 'prop-types';
import NoteEditor from '../NoteEditor';
import Card from '../Card';
import './NoteCreator.css';

class NoteCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(note) {
    this.setState({
      expanded: false
    });
    this.props.onSave(note, 'create');
  }

  handleClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    let render = this.state.expanded 
      ? <NoteEditor onSubmit={this.handleSubmit} />
      : <div onClick={this.handleClick} className='NoteCreator__createButton'>Tire uma nota</div>;

    return (
      <div className='NoteCreator'>
        <Card>
          {render}
        </Card>
      </div>
    );
  }
}

NoteCreator.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default NoteCreator;