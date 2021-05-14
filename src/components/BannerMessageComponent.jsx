import React from 'react'

export default class BannerMessageComponent extends React.Component {
    
    render() {
        return (
            <div className={this.props.bannerMessage === "" ? "alert alert-danger hide" : "alert alert-danger"} id={this.props.id} role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>&nbsp;
                {this.props.bannerMessage}
            </div>
        );
    }
}