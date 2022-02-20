import React from 'react';
import requests from './axiosRequests';

class GetAll extends React.Component {
  getAllData = () => {
    requests.getAll(this.props.getAllCb);
  };

  render() {
    return (
      <div>
        <h3>
          get all entries from DB:
        </h3>
        <button onClick={this.getAllData}>get all</button>
        <div>
          {this.props.result}
        </div>
      </div>
    );
  }
}

export default GetAll;