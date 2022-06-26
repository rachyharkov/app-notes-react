import React from "react";

function ArchiveButton({id, onArchived, archivedStatus}) {
    return(<button className="note-item__archive-button" onClick={() => onArchived(id)}>{archivedStatus ? 'Aktifkan' : 'Arsipkan'}</button>)
}

export default ArchiveButton