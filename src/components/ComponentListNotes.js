import React from "react";
import NoteItem from "./ComponentNotesItem";

function ListElement({notes, onDelete}) {

    if(notes.length > 0) {
        return(
            <div className="notes-list">
                {
                    notes.map((notenya) => (
                        <NoteItem key={notenya.id} onDelete={onDelete} {...notenya} />
                    ))
                }
            </div>
        )
    } else {
        return(
            <div className="notes-list">
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            </div>
        )
    }
}

export default ListElement