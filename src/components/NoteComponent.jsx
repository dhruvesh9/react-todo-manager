import React from 'react';

export default class NoteComponent extends React.Component {
    
    constructor(props){
        super(props)
    }

    sendRemovedData = (e)=>{
        let data = {
            message : this.props.message,
            timestamp : this.props.timestamp
        }
        this.props.callbackRemovedData(data);
    }

    render() {
        return (
            <tr id={this.props.timestamp}>
                <td>
                    <h5 className="text-info">{this.props.timestamp}</h5>
                </td>
                <td>
                    <h5 className="text-info" dangerouslySetInnerHTML={{ __html: this.props.message }}></h5>
                </td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.sendRemovedData}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </td>
            </tr>
        );
    }
}