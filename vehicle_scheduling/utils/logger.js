const axios = require("axios");

async function Log(stack, level, packageName, message) {
    try {
        await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );
    } catch (err) {
        // Avoid console.log() in the application.
        // You may silently ignore logging failures or handle them appropriately.
    }
}

module.exports = Log;