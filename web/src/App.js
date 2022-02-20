import React from 'react';
import GetAll from './GetAll.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getAllResponse: ''
    };
    
    this.getAllCb = this.getAllCb.bind(this);
  }

  getAllCb (res) {
    let getAllResponseString = '';
    if (res.status === 200) {
      getAllResponseString = JSON.stringify(res.data);
    } else {
      getAllResponseString = 'An error occured.';
    }
    this.setState({
      getAllResponse: getAllResponseString
    })
  }

  render() {
    return (
      <div>
        <h1>
          React NodeJS Yugabyte Template
        </h1>
        <div>
          <i>source code <a href="https://github.com/nijova/react-node-yugabyte-template" 
            target="_blank" rel="noreferrer">here</a>.</i>
        </div>
        <GetAll getAllResponse={this.state.getAllResponse} getAllCb={this.getAllCb}/>
      </div>
    );
  }
}

export default App;
