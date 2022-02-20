import Axios from "axios";

const baseUrl = 'http://localhost:3001';

const getAll = (cb) => {
  Axios.get(`${baseUrl}/tablename`)
    .then((response) => { cb(response) });
}

const requests = {getAll};

export default requests;