import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_NODE_URL,
});

export { api };