import React from 'react';
import PropTypes from 'prop-types';
import {
  NoteList
} from './components';
import './Keep.css';

class Keep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      search: '',
      selectedNotes: 0,
      IsSelectAllClicked: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleEdit(newNote) {
    let notes = this.state.notes.map((oldNote) => {
      if (newNote.id === oldNote.id) {
        oldNote.editable = !oldNote.editable;
      }
      return oldNote;
    });

    this.setState({
      notes: notes
    });
  }

  handleSave(newNote, mode) {
    let notes = this.state.notes;

    if (mode === 'update') {
      notes = notes.map((oldNote) => {
        if (newNote.id === oldNote.id) {
          return newNote;
        }
        return oldNote;
      });
    }
    else if (mode === 'create') {      
      notes.unshift(newNote);
    }
  
    this.setState({
      notes: notes
    });
  }

  componentWillMount() {
    //render data from global sample-data.js
  //render data from global sample-data.js
    //<Keep notes={sampleData}  from the index.
    this.setState({
      notes: this.props.notes
    });
  }

  filterNotes() {
    return this.state.notes.filter((note) => {
      let value = this.state.search.replace(/\\/g, '\\\\');
      return note.title.search(value) !== -1 || note.content.search(value) !== -1;
    });
  }

  render() {
    let notes = this.state.search.length ? this.filterNotes() : this.state.notes;

    return (
      <div className="Keep">
        <div className="container">
          <NoteList
            notes={notes}
            onSave={this.handleSave} // need bind this data in the constructor + call the function of handleSave
            onEdit={this.handleEdit}
            onSelect={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}

Keep.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    selected: PropTypes.bool,
    editable: PropTypes.bool,
  })).isRequired,
};

export default Keep;
