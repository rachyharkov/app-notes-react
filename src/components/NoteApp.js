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

    deleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    filterNotesHandler(e) {
        e.preventDefault()
        const value = e.target[0].value
        console.log(value)
        const filteredNotes = this.state.notes.filter((note) => note.body.includes(value))

        if(filteredNotes.length > 0) {
            this.setState({
                search: true
            })
        } else {
            this.setState({
                search: false
            })
        }
        // console.log(filteredNotes)
        return this.setState({filteredNotes: filteredNotes})
    }

    render() {

        if(this.state.search == false) {

            return(
                <div>
                    <HeaderTitlePageElement filterNotesHandler={this.filterNotesHandler}/>
                    <div className="note-app__body">
                        <InputElement addNotes={this.addNoteHandler}/>
                        <ListNotesElement notes={this.state.notes} onDelete={this.deleteNoteHandler} archivedStatus={false}/>
                        <ListNotesElement notes={this.state.notes} onDelete={this.deleteNoteHandler} archivedStatus={true}/>
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
                        <ListNotesElement notes={this.state.filteredNotes} onDelete={this.deleteNoteHandler} archivedStatus={false}/>
                        <ListNotesElement notes={this.state.filteredNotes} onDelete={this.deleteNoteHandler} archivedStatus={true}/>
                    </div>
                </div>
            )
        }

    }
}

export default NoteApp