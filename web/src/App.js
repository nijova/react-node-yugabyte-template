import React from 'react';
import GetAll from './GetAll.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getAllResponse: []
    };
  }

  getAllCb (res) {
    // console.log(res);
    if (res.status === 200) {
      console.log(JSON.stringify(res.data))
    } else {
      //error
    }
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
        <GetAll getAllCb={this.getAllCb}/>
      </div>
    );
  }
}

export default App;
