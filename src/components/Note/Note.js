import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import NoteEditor from '../NoteEditor';
import NoteView from '../NoteView';
import Icon from '../Icon';
import './Note.css';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onOver: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOver = this.handleOver.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSave(note) {
    this.props.onSave(note, 'update');
  }

  handleClick() {
    if (!this.props.note.selected) {
      this.props.onEdit(this.props.note);
    }
  }

  handleOver() {
    this.setState({
      onOver: !this.state.onOver
    });
  }

  handleSelect() {
    this.props.onSelect(this.props.note, !this.props.note.selected);
  }

  render() {
    let isEditable = this.props.note.editable ? 'Note--editable' : '';
    let isSelected = this.props.note.selected ? 'Note--selected' : '';
    let isSelectButtonVisible = '';

    if (this.props.note.selected) {
      isSelectButtonVisible = 'Note__selectButton--visible';
    }
    else if (!this.props.note.editable && this.state.onOver) {
      isSelectButtonVisible = 'Note__selectButton--visible';
    }

    return (
      <div
        onMouseOver={this.handleOver}
        onMouseOut={this.handleOver}
        className={['Note', isSelected, isEditable].join(' ')}
      >
        <Card focus={this.props.note.editable}>
          <a onClick={this.handleSelect} className={['Note__selectButton', isSelectButtonVisible].join(' ')}>
            <Icon name='check' />
          </a>
          {this.props.note.editable 
            ? <NoteEditor onSubmit={this.handleSave} note={this.props.note} /> 
            : <NoteView onClick={this.handleClick} note={this.props.note} />}
        </Card>
      </div>
    );
  }
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    selected: PropTypes.bool,
    editable: PropTypes.bool,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Note;
