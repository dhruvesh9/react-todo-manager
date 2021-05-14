import React from 'react';
import { checkIfDataInLocalStorage, getLocalStorageNotes } from '../util/NoteUtil';
import NoteComponent from './NoteComponent'

class NoteAreaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: checkIfDataInLocalStorage?getLocalStorageNotes():[]
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.newNote !== this.props.newNote) {
            let currentNotes = this.state.notes;
            currentNotes.push(this.props.newNote);
            this.setState({
                notes: currentNotes
            })
        }
    }

    getRemovedData = (data)=>{
        let tempNotes = this.state.notes;
        let position = -1;
        for(let i=0;i<tempNotes.length;i++){
            if(tempNotes[i].timestamp===data.timestamp){
                position = i;
                break;
            }
        }
        if(position>-1){
            tempNotes.splice(position,1);
            this.setState({
                notes: tempNotes
            })
            localStorage.removeItem(data.timestamp);
        }
    }

    render() {

        let noteList = this.state.notes.map(data => <NoteComponent callbackRemovedData={this.getRemovedData} key={data.timestamp} message={data.message} timestamp={data.timestamp} />)

        if(noteList.length>0){
            return (
                <div className="">
                    <div>
                        <h3 className="text-danger">Current number of notes : {this.state.notes.length}</h3>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {noteList}
                        </tbody>
                    </table>
                </div>
            );
        }else{
            return (
                <div className="">
                </div>
            );
        }
    }
}

export default NoteAreaComponent;