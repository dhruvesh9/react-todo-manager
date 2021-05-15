import React from 'react';
import ReactDOM from 'react-dom';
import BannerMessageComponent, { MessageType } from './BannerMessageComponent';
import NoteAreaComponent from './NoteAreaComponent';
import TextAreaComponent from './TextAreaComponent';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteData: undefined
        }
    }

    getData = (data) => {
        localStorage.setItem(data.timestamp, data.message);
        this.setState({
            newNoteData: data
        })
        ReactDOM.render(<BannerMessageComponent type={MessageType.SUCCESS} bannerMessage="Woohoo!! New note added successfully." />
        ,document.getElementById('bannerMsgArea'));
    }

    render() {
        return (
            <div className="container todo-container">
                <div className="row">
                    <TextAreaComponent callbackToContainer={this.getData} />
                </div>
                <br />
                <div className="row">
                    <NoteAreaComponent newNote={this.state.newNoteData} />
                </div>
            </div>
        );
    }
}

export default MainContainer;