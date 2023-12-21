import userModel from "../models/user.js";


const getAllUser = async (req, res) => {
    try {
        let users = await userModel.find();
        res.status(200).send({
            message: "Users list fetched successfully",
            users
        })
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

const getUserById = async (req, res) => {
    try {
        let {id} = req.params
        let user = await userModel.findById(id);
        if(user){
            res.status(200).send({
                message: "User fetched successfully",
                user
            })
        }
        else{
            res.status(400).send({message: "Invalid user"});
        }
        
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

const createUser = async(req, res) => {
    try {
        let user = await userModel.findOne({email: req.body.email});
        if(!user){
            await userModel.create(req.body)
            res.status(200).send({message: "User created successfully"})
            
        }
        else{
            res.status(400).send({message: `User with ${req.body.email} already exists`})
        }
    } catch (error) {
        res.status(500).send({error:error.message});
    }
}

const editUserById = async (req, res) => {
    try {
        let {id} = req.params
        let user = await userModel.findById(id);
        if(user){
            user.firstName = req.body.firstName
            user.lastName = req.body.lastName
            user.email = req.body.email

            await user.save()
            
            res.status(200).send({message: "User Data Saved"})
        }
        else{
            res.status(400).send({message: "Invalid user"});
        }
        
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

const deleteUserById = async (req, res) => {
    try {
        let {id} = req.params
        let user = await userModel.findById(id);
        if(user){
            await userModel.deleteOne({_id:id})
            res.status(200).send({
                message: "User Deleted"
            })
        }
        else{
            res.status(400).send({message: "Invalid user"});
        }
        
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export default {
    createUser, getAllUser, getUserById, editUserById, deleteUserById
}