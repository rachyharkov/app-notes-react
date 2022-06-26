import React from "react";

function SearchForm({filterNotesHandler}){
    return(
        <form onSubmit={filterNotesHandler}>
            <input type="text" name="searchValue" placeholder="Cari Catatan"/>
        </form>
    )
}

export default SearchForm