import React from 'react';
import NoteItemContent from './NoteItemContent'
import NoteItemAction from './NoteItemAction';
import { showFormattedDate } from '../utils/index';

function NoteItem ({ id, title, body, createdAt, archived, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />
      <NoteItemAction archived={archived} id={id} onDelete={onDelete} onArchived={onArchived} />
    </div>
 );
}

export default NoteItem;