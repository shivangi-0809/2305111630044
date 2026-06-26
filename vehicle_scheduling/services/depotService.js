const api = require("../config/axios");
const Log = require("../utils/logger");

async function getDepots() {

    try {

        await Log(
            "backend",
            "info",
            "service",
            "Fetching depot details"
        );

        const response = await api.get(
            process.env.DEPOT_API,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`
                }
            }
        );

        await Log(
            "backend",
            "info",
            "service",
            "Depot details fetched successfully"
        );

        return response.data;

    } catch (err) {

        await Log(
            "backend",
            "error",
            "service",
            "Failed to fetch depot details"
        );

        throw err;
    }
}

module.exports = {
    getDepots
};