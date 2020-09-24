import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://first-react-app-9ed2a.firebaseio.com/'
});

export default instance;