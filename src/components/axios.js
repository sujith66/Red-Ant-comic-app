import axios from 'axios';

//axios instance creation for rest calls
const hash = 'c9f2de6feea20bbbfb5e888dbb7affc0';
const instance = axios.create({baseURL: `https://gateway.marvel.com:443/v1`});

const obj = {
  hash,
  instance
}
export default obj;