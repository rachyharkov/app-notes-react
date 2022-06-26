import React from "react";

function SearchForm({filterNotesHandler}){
    return(
        <form onSubmit={filterNotesHandler}>
            <input type="text" name="searchValue" placeholder="Cari Catatan"/>
            <p className="text-small-attention">Tekan enter untuk inisialisasi pencarian</p>
        </form>
    )
}

export default SearchForm