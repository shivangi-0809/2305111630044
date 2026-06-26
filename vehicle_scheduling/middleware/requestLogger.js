const Log = require("../utils/logger");

async function requestLogger(req, res, next) {
    await Log(
        "backend",
        "info",
        "middleware",
        `${req.method} ${req.originalUrl} request received`
    );

    next();
}

module.exports = requestLogger;