import express from "express";
import Task from "../controllers/Tasks.js";

const router = express.Router();

router
  .route("/")
  .get(Task.getTask)
  .post(Task.postTask);

router
  .route("/:id")
  .put(Task.putTask)
  .delete(Task.deleteTask);

export default router;