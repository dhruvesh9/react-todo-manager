import React from 'react';

export default class NavBarComponent extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand"><p>TODO MANAGER</p></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="todo-font"><a>Login</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle todo-font" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dashboard<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a>Action</a></li>
                                    <li><a>Another action</a></li>
                                    <li><a>Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a>Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}