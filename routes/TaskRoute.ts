import { CreateTask } from "../controller/TaskController"
import express from "express";

const router = express.Router();

router.route("/createTask/:userId").post(CreateTask)

export default router;