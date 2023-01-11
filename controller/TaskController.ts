import {Request,Response} from "express"

import mongoose from "mongoose"
import Taskmodel from "../model/Taskmodel"
import Usermodel from "../model/Usermodel"

const getTask =async (req:Request,res:Response):Promise<Response> => {
    try {
         const gettingTask = await Taskmodel.find()
        return res.status(200).json({
            message:"user found",
            data: gettingTask
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occured"
        })
    }
}

const CreateTask =async (req:Request,res:Response):Promise<Response> => {
    try {
        const getUser = await Usermodel.findById(req.params.UserID)
        if (getUser) {
            const {title,date} = req.body;
            let myDate = Date.now().toLocaleString();

            const CreakinTask = await Taskmodel.create({
                title,
                date:date? date : myDate,
                remainder:"",
                status:false,
                note:""
            });

            await getUser?.myDay?.push(
                new mongoose.Types.ObjectId(CreakinTask._id)
            );
            await getUser?.task?.push(
                new mongoose.Types.ObjectId(CreakinTask._id)
            );

            getUser.save();

            return res.status(200).json({
                message:"Task successfully created",
                data:CreakinTask
            })
        } else{
            return res.status(404).json({
                message:"user not found"
            })
        }
    } catch (error) {
          return res.status(404).json({
            message: "An error occured",
          });
    }
};

export {CreateTask, getTask}