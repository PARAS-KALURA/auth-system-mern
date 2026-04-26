import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // login addreess
});

//adding interceptor

API.interceptors.request.use((req) => {

    const token = localStorage.getItem("token"); //Take saved token from browser

    if (token) {
        req.headers.Authorization = `Bearer ${token}` //Add token in request headers
    }

    return req;


});

export default API;