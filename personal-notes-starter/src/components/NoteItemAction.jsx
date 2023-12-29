import React from 'react';
import DeleteButton from './DeleteButton';
import ArchivedButton from './ArchivedButton';

function NoteItemAction({ archived, id, onDelete, onArchived }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchivedButton archived={archived} id={id} onArchived={onArchived} />
    </div>
  );
}

export default NoteItemAction;