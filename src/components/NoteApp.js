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
    }

    render() {
        return(
            <div>
                <HeaderTitlePageElement/>
                <div className="note-app__body">
                    <InputElement/>
                    <ListElement notes={this.state.notes} />  
                </div>
            </div>
        )
    }
}

export default NoteApp