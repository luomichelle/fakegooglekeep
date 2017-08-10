import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Brand,
  OffsetNav,
  IconButton,
  SearchForm,
  NoteList,
} from './components';
import './App.css';

class App extends React.Component {
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
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      notes: this.props.notes
    });
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

  handleSelect(note, value) {
    if (value) {
      this.selectOne(note);
    } else {
      this.deselectOne(note);
    }
  }

  handleSelectAll() {
    if (this.state.IsSelectAllClicked) {
      this.setState({IsSelectAllClicked: false});
      this.deselectAll();
    } else {
      this.setState({IsSelectAllClicked: true});
      this.selectAll();
    }
  }

  deleteAll(e) {
    let notes = this.state.notes.filter((note, key) => {
      return !note.selected;
    });

    this.setState({
      notes: notes,
      selectedNotes: 0,
      IsSelectAllClicked: false,
    });

    e.preventDefault();
  }

  selectAll() {
    let notes = this.state.notes.map((note) => {
      note.selected = true
      return note;
    });

    this.setState({
      notes: notes,
      selectedNotes: notes.length
    });
  }

  deselectAll() {
    let notes = this.state.notes.map((note) => {
      note.selected = false
      return note;
    });

    this.setState({
      notes: notes,
      selectedNotes: 0
    });
  }

  selectOne(selectedNote) {
    let notes = this.state.notes.map((note) => {
      if (note.id === selectedNote.id) {
        note.selected = true;
      }
      return note;
    });

    this.setState({
      notes: notes,
      selectedNotes: this.state.selectedNotes + 1
    });
  }

  deselectOne(selectedNote) {
    let notes = this.state.notes.map((note) => {
      if (note.id === selectedNote.id) {
        note.selected = false;
      }
      return note;
    });

    this.setState({
      notes: notes,
      selectedNotes: this.state.selectedNotes - 1
    });
  }

  refreshData() {
    let notes = this.props.notes.map((note) => {
      note.selected = false;
      return note;
    });

    this.setState({
      notes: notes
    });
  }

  handleInputChange(value) {
    this.setState({
      search: value
    });
  }

  renderNavbar() {
    if (this.state.selectedNotes > 0) {
      return (
        <Navbar>
          <IconButton className="offsetToggle" name='menu' />
          <Brand text='App' />
          <IconButton onClick={this.handleSelectAll} name='select_all' />
          <IconButton onClick={this.deleteAll} name='delete' />
        </Navbar>
      );
    }

    return (
      <Navbar>
        <IconButton className="offsetToggle" name='menu' />
        <Brand text='App' />
        <SearchForm value={this.state.search} onInputChange={this.handleInputChange} />
        <IconButton onClick={this.refreshData} name='refresh' />
      </Navbar>
    );
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
      <div className="App">
        <OffsetNav toggleClassName='offsetToggle' />
        {this.renderNavbar()}
        <div className="container">
          <NoteList
            notes={notes}
            onSave={this.handleSave}
            onEdit={this.handleEdit}
            onSelect={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    selected: PropTypes.bool,
    editable: PropTypes.bool,
  })).isRequired,
};

export default App; 
