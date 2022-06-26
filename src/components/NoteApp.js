import React from "react"
import HeaderTitlePageElement from "./ComponentHeaderTitle"
import InputElement from "./ComponentInput"
import ListElement from "./ComponentListNotes"
import { getInitialData } from '../utils/index'

class NoteApp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData()
        }

        this.addNoteHandler = this.addNoteHandler.bind(this)
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
    }

    addNoteHandler({title, body}) {
        const dateny = +new Date()
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id: dateny,
                        title: title,
                        body: body,
                        archived: false,
                        createdAt: dateny
                    }
                ]
            }
        })
    }

    deleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    render() {
        return(
            <div>
                <HeaderTitlePageElement/>
                <div className="note-app__body">
                    <InputElement addNotes={this.addNoteHandler}/>
                    <ListElement notes={this.state.notes} onDelete={this.deleteNoteHandler} />  
                </div>
            </div>
        )
    }
}

export default NoteApp