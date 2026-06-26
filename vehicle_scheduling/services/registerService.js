const api = require("../config/axios");
const requestLogger = require("./middleware/requestLogger");

app.use(requestLogger);
async function register() {

    const response = await api.post("/register", {

        email: process.env.EMAIL,
        name: process.env.NAME,
        mobileNo: process.env.MOBILE,
        githubUsername: process.env.GITHUB_USERNAME,
        rollNo: process.env.ROLLNO,
        accessCode: process.env.ACCESS_CODE

    });

    return response.data;
}

module.exports = register;