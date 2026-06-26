const axios = require("axios");

const api = axios.create({
    baseURL: "http://4.224.186.213/evaluation-service",
    headers: {
        "Content-Type": "application/json"
    }
});

module.exports = api;