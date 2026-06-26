const { getDepots } = require("./depotService");
const { getTasks } = require("./taskService");
const knapsack = require("../utils/knapsack");
const Log = require("../utils/logger");

async function schedule() {

    await Log("backend", "info", "service", "Fetching depots");

    const depotData = await getDepots();

    await Log("backend", "info", "service", "Fetching vehicles");

    const vehicleData = await getTasks();

    const result = [];

    for (const depot of depotData.depots) {

        await Log(
            "backend",
            "info",
            "service",
            `Scheduling depot ${depot.ID}`
        );

        const best = knapsack(
            vehicleData.vehicles,
            depot.MechanicHours
        );

        result.push({
            depotID: depot.ID,
            mechanicHours: depot.MechanicHours,
            totalImpact: best.totalImpact,
            selectedTasks: best.selectedTasks
        });
    }

    return result;
}

module.exports = {
    schedule
};