const api = require("../config/axios");

async function getTasks() {
    const response = await api.get(process.env.TASK_API, {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    });

    return response.data;
}

module.exports = { getTasks };