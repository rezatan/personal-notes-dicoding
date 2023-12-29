import React from 'react';

function ArchivedButton( {archived, id, onArchived }) {
  return (
    <button className="note-item__archive-button" onClick={()=> onArchived(id)}>
      {archived ? "Pindahkan" : "Archive"} 
    </button>
  );
}

export default ArchivedButton;