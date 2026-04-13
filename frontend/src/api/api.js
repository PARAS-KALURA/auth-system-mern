import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // login addreess
});

export default API;