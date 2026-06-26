const api = require("../config/axios");

async function authenticate() {

    const response = await api.post("/auth", {

        email: process.env.EMAIL,
        name: process.env.NAME,
        rollNo: process.env.ROLLNO,
        accessCode: process.env.ACCESS_CODE,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET

    });

    return response.data;
}

module.exports = authenticate;