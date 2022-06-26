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

    lengthValueDetection(currentLengthValue, maxValue) {
        document.querySelector('.note-input__title__char-limit').classList.remove('alert-danger')
        const sisaKarakter = (maxValue - currentLengthValue)
        if(sisaKarakter <= 0) {
            document.querySelector('.note-input__title__char-limit').classList.add('alert-danger')
        }
        if(sisaKarakter < 0) {
            return true
        } else {
            document.querySelector('.note-input__title__char-limit span').innerHTML = sisaKarakter
            return false
        }
    }

    typeLimitReached(e) {
        e.target.value = this.state[e.target.name]
    }

    doChangeText(e, thisValue) {
        this.setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: thisValue
            }
        })
    }

    onTextChangeEventHandler(e) {
        const thisValue = e.target.value
        const lengthValue = thisValue.length

        if(e.target.name === 'title') {
            const detection = this.lengthValueDetection(lengthValue, 10)
            detection ? this.typeLimitReached(e) : this.doChangeText(e, thisValue)
        }

    }
    

    onSubmitEventHandler(e) {
        e.preventDefault()
        // alert(JSON.stringify(this.state))
        this.props.addNotes(this.state)
        document.querySelector('.note-input__success-indicator').classList.add('active')
        setTimeout(() => {
            document.querySelector('.note-input__success-indicator').classList.remove('active')
            e.target.reset()
        }, 3000)
    }
    
    render() {
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <div className="note-input__success-indicator">
                    <p>&#x2705;</p>
                </div>
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter: <span>10</span></p>
                <input placeholder="Judul Catatan" onChange={this.onTextChangeEventHandler} type="text" name="title"/>
                <textarea placeholder="Input catatan" onChange={this.onTextChangeEventHandler} name="body"></textarea>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default InputElement