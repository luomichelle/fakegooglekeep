import React from 'react';
import PropTypes from 'prop-types';
import {
  NoteList
} from './components';
import './Keep.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      search: '',
      selectedNotes: 0,
      IsSelectAllClicked: false,
    };
  }
  render() {
    let notes = this.state.search.length ? this.filterNotes() : this.state.notes;

    return (
      <div className="Keep">
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
