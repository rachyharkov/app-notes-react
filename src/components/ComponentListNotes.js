import React from "react";
import NoteItem from "./ComponentNotesItem";

function ListElement({notes}) {
    return(
        <div className="notes-list">
            {
                notes.map((notenya) => (
                    <NoteItem key={notenya.id} {...notenya} />
                ))
            }
        </div>

    )
}

export default ListElement