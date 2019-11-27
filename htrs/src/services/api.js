import axios from 'axios';

const headers = {
  'Access-Control-Allow-Origin': 'true',
};
const api = axios.create({
  baseURL: 'https://hackathon79.herokuapp.com/',
  headers: headers,
});

export default api;
