import React from 'react';
import MainContainer from './components/MainContainer';
import NavBarComponent from './components/NavBarComponent';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
  }
  
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