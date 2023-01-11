import express from "express"
import { GetAllUser, GetSingleUser, RegisterUser } from "../controller/UserController"

const router = express.Router()

router.route("/register").post(RegisterUser)
router.route("/AllUser").get(GetAllUser)
router.route("/getsingle/:id").get(GetSingleUser)

export default router