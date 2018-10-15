import React, { Component } from 'react';
import './styles/config.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div clasName="header-profile" > HEADER PROFILE </div>
          <div clasName="header-profile"  style={style}> SEARCH BOOKS </div>
          
          {/* <div clasName="stand"> */}
            <div style={style}> Currently Reading </div>
            <div style={style}> Want to Read </div>
            <div style={style}> Read </div>
          {/* </div> */}
      </div>
    );
  }
}

export default App;

const style = {
  'border': 'solid',
  'border-color': 'blue'
};