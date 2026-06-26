# Vehicle Maintenance Scheduler
##
A Node.js and Express backend application that schedules vehicle maintenance tasks using the **0/1 Knapsack Algorithm** to maximize operational impact within available mechanic hours.

## Tech Stack
- Node.js
- Express.js
- Axios

## Features
- Vehicle scheduling API
- Authentication service
- Registration service
- Logging middleware
- Dynamic Programming (0/1 Knapsack)

## Run the Project

```bash
npm install
node server.js
```

## API

**GET**

```
http://localhost:5000/api/schedule
```

Returns the optimal maintenance schedule for all depots.

## Project Structure

```
config/
controllers/
middleware/
routes/
services/
utils/
server.js
```