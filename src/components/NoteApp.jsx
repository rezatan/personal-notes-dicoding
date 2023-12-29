import React from 'react';
import { getInitialData } from '../utils/index';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
        notes: getInitialData(),
        unfilteredNotes: getInitialData()
    }
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onSearchNoteHandler({ search }) {
    if (search !== ''){
      const notes = this.state.unfilteredNotes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
      this.setState({ notes });
    }
    else {
      this.setState ({
        notes: this.state.unfilteredNotes,
      });
    }
  }

  onAddNoteHandler({title, body}) {
    const newNote = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: new Date()
    }
    this.setState((prevState) => {
      return {
        notes : [
          ...prevState.notes,
         newNote
        ],
        unfilteredNotes : [
          ...prevState.unfilteredNotes,
          newNote
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    const unfilteredNotes = this.state.unfilteredNotes.filter(note => note.id !== id);
    this.setState({ notes, unfilteredNotes });
  }

  onArchivedHandler(id){
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id ===id){
          return {
            ...note,
            archived: !note.archived
          }
        }
        return note;
      });
      const updatedUnfilteredNotes = prevState.unfilteredNotes.map(note => {
        if (note.id ===id){
          return {
            ...note,
            archived: !note.archived
          }
        }
        return note;
      });
      return {
        notes: updatedNotes,
        unfilteredNotes: updatedUnfilteredNotes
      }
    });
  }

  render() {
    const activeNotes = this.state.notes.filter(note => !note.archived);
    const archivedNotes = this.state.notes.filter(note => note.archived);
    return(
      <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <NoteSearch onSearch={this.onSearchNoteHandler} />
      </div>
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? (
          <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
      </>
    );
  }
}

export default NoteApp;