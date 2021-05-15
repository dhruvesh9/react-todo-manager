import React from 'react';
import MainContainer from './components/MainContainer';
import NavBarComponent from './components/NavBarComponent';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <NavBarComponent />
        <div id="bannerMsgArea"></div>
        <MainContainer />
      </div>
    );
  }
}