import React from 'react';
import NoteItem from './NoteItem';

function NoteList ({ notes, onDelete, onArchived }) {
  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem key={note.id}
          onDelete={onDelete}
          onArchived={onArchived}
          {...note} />
        ))
      }
    </div>
  );
}

export default NoteList;