import React from "react";
import SearchForm from "./ComponentSearchNotes";

function HeaderTitlePageElement({filterNotesHandler}) {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <SearchForm filterNotesHandler={filterNotesHandler}/>
        </div>
    )
}

export default HeaderTitlePageElement