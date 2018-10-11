import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://order-builder.firebaseio.com/',
});

export default instance;