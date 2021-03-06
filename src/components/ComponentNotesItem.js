import React from "react";
import ItemContent from "./ComponentItemContent";
import DeleteButton from "./ComponentDeleteButton";
import ArchiveButton from "./ComponentArchiveButton";

function NoteItem({onDelete, onArchived, archivedStatus, ...notes}) {
    return(
        <div className="note-item">
            <ItemContent {...notes}/>
            <div className="note-item__action">
                <DeleteButton id={notes.id} onDelete={onDelete}/>
                <ArchiveButton id={notes.id} onArchived={onArchived} archivedStatus={archivedStatus} />
            </div>
        </div>
    )
}

export default NoteItem