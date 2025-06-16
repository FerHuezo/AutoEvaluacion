import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

import tasksRoutes from "./src/routes/Tasks.js";

const app = express();

const swaggerDocument = JSON.parse(
    fs.readFileSync(path.resolve("./documentation.json"), "utf-8")
  );

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/tasks", tasksRoutes)

export default app;