require("dotenv").config();

const express = require("express");

const app = express();

const requestLogger = require("./middleware/requestLogger");
const schedulerRoutes = require("./routes/schedulerRoutes");

app.use(express.json());

app.use(requestLogger);

app.use("/api", schedulerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});