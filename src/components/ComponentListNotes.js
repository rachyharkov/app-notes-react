import React from "react";
import NoteItem from "./ComponentNotesItem";

function ListNotesElement({notes, onDelete, archivedStatus}) {

    let notesnya = notes
        .filter((notenya) => notenya.archived == archivedStatus)
        .map((notenya) => <NoteItem key={notenya.id} onDelete={onDelete} {...notenya} />)

    return(
        <div>
            <h3 className="notes-list__title">{archivedStatus ? 'Catatan Arsip' : 'Catatan Aktif'}</h3>
            <div className="notes-list">
                {
                    notesnya.length > 0 ? notesnya : <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
            </div>
        </div>
    )
}

export default ListNotesElement