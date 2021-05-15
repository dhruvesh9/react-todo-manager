import React from 'react'

export default class BannerMessageComponent extends React.Component {
    render() {
        let classNameStr = "container alert "+this.props.type;
        if(this.props.bannerMessage === ""){
            classNameStr = classNameStr + " hide";
        }
        return (
            <div className={classNameStr} id={this.props.id} role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>&nbsp;
                {this.props.bannerMessage}
            </div>
        );
    }
}

export const MessageType = {
    SUCCESS: "alert-success",
    WARNING: "alert-warning",
    ERROR: "alert-danger",
    INFO: "alert-info"
 };
 Object.freeze(MessageType);