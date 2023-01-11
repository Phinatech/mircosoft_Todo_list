import mongoose, { Mongoose } from "mongoose";
import {taskData} from "./Allinterface"

interface UserData{
    name:string;
    email:string;
    password:string;
    myDay:any[]
    planned:taskData[]
    important:taskData[]
    assigned:taskData[]
    task:any[]
}

interface myDATA extends UserData , mongoose.Document{}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  myDay: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  planned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  important: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  assigned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
});

export default mongoose.model<myDATA>("users",UserSchema)