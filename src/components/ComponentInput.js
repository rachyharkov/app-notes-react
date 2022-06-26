import React from "react";

class InputElement extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            // archived: 0,
            // createdAt: ''
        }

        this.onTextChangeEventHandler = this.onTextChangeEventHandler.bind(this)

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTextChangeEventHandler(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmitEventHandler(e) {
        e.preventDefault()
        alert(JSON.stringify(this.state))
    }
    
    render() {
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter: 0</p>
                <input placeholder="Judul Catatan" onChange={this.onTextChangeEventHandler} type="text" name="title"/>
                <textarea placeholder="Input catatan" onChange={this.onTextChangeEventHandler} name="body"></textarea>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default InputElement