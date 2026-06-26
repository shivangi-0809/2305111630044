const { schedule } = require("../services/schedulerService");

const scheduleTasks = async (req, res) => {
    try {
        const result = await schedule();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    scheduleTasks
};