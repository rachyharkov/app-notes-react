import React from "react";
import NoteItem from "./ComponentNotesItem";

function ListNotesElement({notes, onDelete, onArchived, archivedStatus}) {

    let notesnya = notes
        .filter((notenya) => notenya.archived == archivedStatus)
        .map((notenya) => <NoteItem key={notenya.id} onDelete={onDelete} onArchived={onArchived} archivedStatus={archivedStatus} {...notenya} />)

    let whattypeofcatatanisthis = archivedStatus ? 'Catatan Arsip' : 'Catatan Aktif'

    return(
        <div>
            <h3 className="notes-list__title">{whattypeofcatatanisthis}</h3>
            <div className="notes-list">
                {
                    notesnya.length > 0 ? notesnya : <p className="notes-list__empty-message">Tidak ada {whattypeofcatatanisthis}</p>
                }
            </div>
        </div>
    )
}

export default ListNotesElement