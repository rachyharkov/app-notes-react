import React from "react"
import HeaderTitlePageElement from "./ComponentHeaderTitle"
import InputElement from "./ComponentInput"

class NoteApp extends React.Component {
    render() {
        return(
            <div>
                <HeaderTitlePageElement/>
                <div className="note-app__body">
                    <InputElement/>
                    
                </div>
            </div>
        )
    }
}

export default NoteApp