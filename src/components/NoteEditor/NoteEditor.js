import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import ActionButton from '../ActionButton';
import './NoteEditor.css';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    let title = this.props.note ? this.props.note.title : '';
    let content = this.props.note ? this.props.note.content : '';

    this.state = {
      title: title,
      content: content,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let id = this.props.note ? this.props.note.id : uniqid();

    let note = {
      id: id,
      title: this.state.title,
      content: this.state.content,
    };
    
    this.props.onSubmit(note);
    
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form className='NoteEditor' onSubmit={this.handleSubmit}>
        <div className='NoteEditor__FormGroup'>
          <label 
            className='NoteEditor__FormGroup__label' 
            htmlFor='NoteTitle'>
              Título
          </label>
          <input 
            name='title' 
            className='NoteEditor__FormGroup__input NoteEditor__FormGroup__input--title' 
            id='NoteTitle' 
            type='text' 
            onChange={this.handleChange} 
            value={this.state.title}
            placeholder='Título' 
          />
        </div>
        <div className="NoteEditor__FormGroup">
          <label 
            className='NoteEditor__FormGroup__label' 
            htmlFor='NoteTitle'>
              Conteúdo
          </label>
          <textarea 
            name='content'
            className="NoteEditor__FormGroup__input"
            id="NoteContent"
            onChange={this.handleChange}
            value={this.state.content}
            rows='7'
            placeholder='Tire uma nota'
          />
        </div>
        <div className="NoteEditor__FormActions">
          <ActionButton type='submit' text='Concluído' />
        </div>
      </form>
    );
  }
}

NoteEditor.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired
};

export default NoteEditor;
