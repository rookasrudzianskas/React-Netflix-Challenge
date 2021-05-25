import axios from 'axios';

// /** base url to make request to the themoviedatabase */

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
//api c9e4c565ab881a8efbfab72184d6ebef
