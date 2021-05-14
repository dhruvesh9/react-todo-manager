import React from 'react';
import NoteComponent from './NoteComponent'

class NoteAreaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.newNote !== this.props.newNote) {
            let currentNotes = this.state.notes;
            currentNotes.push(this.props.newNote);
            this.setState({
                notes: currentNotes
            })
            console.log('current state for NoteAreaComponent : ' + JSON.stringify(this.state));
        }
    }

    getRemovedData = (data)=>{
        console.log('data removed '+JSON.stringify(data));
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
        }
    }

    render() {

        let noteList = this.state.notes.map(data => <NoteComponent callbackRemovedData={this.getRemovedData} key={data.timestamp} message={data.message} timestamp={data.timestamp} />)

        if(noteList.length>0){
            return (
                <div className="row">
                    <div>
                        <h3 className="text-danger">Current number of notes : {this.state.notes.length}</h3>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Message</th>
                                <th>Timestamp</th>
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
                <div className="row">
                </div>
            );
        }
    }
}

export default NoteAreaComponent;