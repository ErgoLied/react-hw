const axios = require("axios");
const url = {baseURL: 'https://jsonplaceholder.typicode.com/'}
const instance = axios.create(url);

const getUsers = () => {
    return instance('/users');
}
const getPosts = () => {
    return instance('/posts');
}
const getComments = () => {
    return instance('/comments');
}

export {getUsers, getPosts, getComments}
