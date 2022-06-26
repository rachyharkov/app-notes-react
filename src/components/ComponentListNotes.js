import React from "react";
import NoteItem from "./ComponentNotesItem";

function ListElement({notes, onDelete}) {
    return(
        <div className="notes-list">
            {
                notes.map((notenya) => (
                    <NoteItem key={notenya.id} onDelete={onDelete} {...notenya} />
                ))
            }
        </div>

    )
}

export default ListElement