import React from "react"
import HeaderTitlePageElement from "./ComponentHeaderTitle"
import InputElement from "./ComponentInput"
import ListNotesElement from "./ComponentListNotes"
import { getInitialData } from '../utils/index'

class NoteApp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            search: false,
            filteredNotes: []
        }

        this.addNoteHandler = this.addNoteHandler.bind(this)
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
        this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
        this.filterNotesHandler = this.filterNotesHandler.bind(this)
    }

    addNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        archived: false,
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        })
    }

    archiveNoteHandler(id) {

        const noteIndex = this.state.notes.findIndex((note) => note.id == id)
        this.state.notes[noteIndex].archived = !this.state.notes[noteIndex].archived
        this.setState((prevState) => {
            return {
                ...prevState,
                archived: this.state.notes[noteIndex].archived
            }
        })
    }

    deleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    filterNotesHandler(e) {
        e.preventDefault()
        const value = e.target[0].value
        const filteredNotes = this.state.notes.filter((note) => note.body.includes(value))
        const totalOriginalLengthNotes = this.state.notes.length
        let message
        const currentLength = filteredNotes.length
        if(currentLength > 0) {
            if(currentLength >= totalOriginalLengthNotes) {
                this.setState({
                    search: false
                })
                message = 'Harap masukan input!'
            } else {
                this.setState({
                    search: true
                })
                message = currentLength + ' Catatan ditemukan'
            }
        } else {
            message = 'Catatan tidak ditemukan :('
            this.setState({
                search: false
            })
        }

        document.querySelector('.text-small-attention').innerHTML = message
        setTimeout(() => {
            document.querySelector('.text-small-attention').innerHTML = 'Tekan enter untuk inisialisasi pencarian'
        }, 2000)


        return this.setState({filteredNotes: filteredNotes})
    }

    render() {

        if(this.state.search == false) {

            return(
                <div>
                    <HeaderTitlePageElement filterNotesHandler={this.filterNotesHandler}/>
                    <div className="note-app__body">
                        <InputElement addNotes={this.addNoteHandler}/>
                        <ListNotesElement notes={this.state.notes} onDelete={this.deleteNoteHandler} onArchived={this.archiveNoteHandler} archivedStatus={false}/>
                        <ListNotesElement notes={this.state.notes} onDelete={this.deleteNoteHandler} onArchived={this.archiveNoteHandler} archivedStatus={true}/>
                    </div>
                </div>
            )
        }

        if(this.state.search == true) {
            return(
                <div>
                    <HeaderTitlePageElement filterNotesHandler={this.filterNotesHandler}/>
                    <div className="note-app__body">
                        <InputElement addNotes={this.addNoteHandler}/>
                        <ListNotesElement notes={this.state.filteredNotes} onDelete={this.deleteNoteHandler} onArchived={this.archiveNoteHandler} archivedStatus={false}/>
                        <ListNotesElement notes={this.state.filteredNotes} onDelete={this.deleteNoteHandler} onArchived={this.archiveNoteHandler} archivedStatus={true}/>
                    </div>
                </div>
            )
        }

    }
}

export default NoteApp