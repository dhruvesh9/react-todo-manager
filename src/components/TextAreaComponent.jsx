import React from 'react';
import { formatNoteMessage } from '../util/NoteUtil';
import BannerMessageComponent from './BannerMessageComponent';

var i = 0;
var txt = 'Manage list, checklist, notes, todos, tasks, birthdays and literally anything.';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("citeType").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

class TextAreaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ""
        }

    }

    sendData = (e) => {
        let noteMessage = document.getElementById('addNote').value;
        if (!this.validate(noteMessage)) {
            return;
        }

        noteMessage = formatNoteMessage(noteMessage);

        let data = {
            message: noteMessage,
            timestamp: new Date().getTime()
        }
        document.getElementById('addNote').value = ""
        this.props.callbackToContainer(data);
    }

    validate(noteMessage) {
        let isValid = false;
        let errorMessage = "";
        if (noteMessage === '') {
            errorMessage = "The note can not be empty, please fill the text area.";
        } else if (noteMessage.length > 100) {
            errorMessage = "The note max size exceeded, the max limit is 100 characters.";
        } else {
            isValid = true;
        }

        this.setState({
            errorMessage: errorMessage
        });

        return isValid;
    }

    componentDidMount() {
        typeWriter();
    }

    render() {
        return (

            <div className="">
                <BannerMessageComponent id="bannerArea" bannerMessage={this.state.errorMessage} />
                <div>
                    <div className="bs-docs-header" id="content" tabIndex="-1">
                        <blockquote className="">
                            <h1>ADD NOTE</h1>
                            <tt id="citeType"></tt>
                        </blockquote>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control rounded-0 todo-textarea" id="addNote" rows="5"></textarea>
                    </div>
                    <div className="">
                        <button type="button" className="btn btn-primary" onClick={this.sendData}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextAreaComponent;
