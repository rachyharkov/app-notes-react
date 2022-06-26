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

        this.addNotesHandler = this.addNotesHandler.bind(this)
    }

    addNotesHandler({title, body}) {
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

    render() {
        return(
            <div>
                <HeaderTitlePageElement/>
                <div className="note-app__body">
                    <InputElement addNotes={this.addNotesHandler}/>
                    <ListElement notes={this.state.notes} />  
                </div>
            </div>
        )
    }
}

export default NoteApp