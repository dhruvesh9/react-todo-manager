import React from 'react';
import NoteAreaComponent from './NoteAreaComponent';
import TextAreaComponent from './TextAreaComponent';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteData : undefined
        }
    }

    getData = (data) =>{
        console.log('Data from TextAreaComponent -> '+JSON.stringify(data));
        localStorage.setItem(data.timestamp,data.message);
        this.setState({
            newNoteData : data
        })
    }

    render() {
        return (
            <div className="container todo-container">
                <div className="row">
                    <TextAreaComponent callbackToContainer={this.getData}/>
                </div>
                <br />
                <div className="row">
                    <NoteAreaComponent newNote={this.state.newNoteData}/>
                </div>
            </div>
        );
    }
}

export default MainContainer;