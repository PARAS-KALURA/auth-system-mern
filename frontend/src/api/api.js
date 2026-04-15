import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // login addreess
});

//adding interceptor



export default API;