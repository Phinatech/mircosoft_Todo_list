import mongoose from "mongoose"

const Url = "mongodb://localhost/Todolist"

mongoose.connect(Url)

mongoose.connection
.on("open",()=>{
    console.log("Database connected")
})

.once("error",()=>{
    console.log("error occured")
})