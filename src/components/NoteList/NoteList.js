import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note';
import NoteCreator from '../NoteCreator';
import './NoteList.css';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBgVisible: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSelect(note, value) {
    this.props.onSelect(note, value);
  }

  handleSave(note, mode) {
    this.setState({
      isBgVisible: false
    });

    this.props.onSave(note, mode);
  }

  handleEdit(note) {
    this.setState({
      isBgVisible: true
    });

    this.props.onEdit(note);
  }

  renderNotes() {
    return this.props.notes.map((note) => {
      return <Note
        key={note.id}
        note={note}
        onSelect={this.handleSelect}
        onSave={this.handleSave}
        onEdit={this.handleEdit}
        />;
    });
  }

  render() {
    let isBgVisible = this.state.isBgVisible ? 'NoteList__Background--visible' : '';

    return (
      <div className="NoteList">
        <NoteCreator 
          onSave={this.handleSave}
        />
        {this.renderNotes()}
        <div className={['NoteList__Background', isBgVisible].join(' ')}></div>
      </div>
    );
  }
}

NoteList.propTypes = {
  onSave: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default NoteList;
