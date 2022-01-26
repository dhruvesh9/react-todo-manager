import React from 'react';

export default class NavBarComponent extends React.Component {

    foo(){
        console.log('Login link')
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand"><p>TODO MANAGER</p></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="todo-font"><button onClick={this.foo}>Login</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}