import React from 'react';
import PropTypes from 'prop-types';
import './NoteView.css';

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className='NoteView' onClick={this.handleClick}>
        <div className="NoteView__Group">
          <h2 className="NoteView__Title">
            {this.props.note.title}
          </h2>
        </div>
        <div className="NoteView__Group">
          <p className="NoteView__Content">
            {this.props.note.content}
          </p>
        </div>
      </div>
    );
  }
}

NoteView.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onClick: PropTypes.func
};

export default NoteView;
