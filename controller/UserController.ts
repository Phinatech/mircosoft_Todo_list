import {Request,Response} from "express"
import Usermodel from "../model/Usermodel"

//Get all
const GetAllUser =async (req:Request,res:Response):Promise<Response> => {
    try {
        const getUser = await Usermodel.find()
        return res.status(200).json({
            message:"Found successfully",
            data:getUser
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occured",
            data:error

        })
    }
};


//GETTING sINGLE DATA
const GetSingleUser =async (req:Request,res:Response):Promise<Response> => {
    try {
        const getSingle = await Usermodel.findById(req.params.id)
        return res.status(200).json({
            message:"Found successfully",
            data:getSingle
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occured",
            data:error

        })
    }
}


//Register a user

const RegisterUser =async (req:Request,res:Response):Promise<Response> => {
    try {
        
        const {name, email, password} = req.body

        const user = await Usermodel.findOne({
            email
        })

        if (user){
            return res.status(400).json({
                message:""
            })
        } else{
    const reqUser = await Usermodel.create({
    name,
    email,
    password
    });

    return res.status(200).json({
    message:"Found Successfully",
    data: reqUser
    })
}
    } catch (error) {
         return res.status(404).json({
           message: "An error occured",
           data: error,
         });
    }
}

export {GetAllUser,GetSingleUser,RegisterUser}