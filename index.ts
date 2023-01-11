import express,{Request,Response,Application} from "express"
import user from "./routes/UserRoute";
import tasks from "./routes/TaskRoute"
import "./config/db"

const port = 2099
const app:Application = express()
app.use(express.json());


app.get("/",(req:Request,res:Response):Response=>{
return res.status(200).json({
message:"Server is up and running"
    })
})
 app.use("/api",user)
 app.use("/api/tasks",tasks)

app.listen(port,()=>{
console.log("server is listening")
})