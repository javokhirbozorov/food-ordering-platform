import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/user.js';
const userRoutes = express.Router();



//* CRUD Implementation

//*CREATE

userRoutes.post('/', expressAsyncHandler(async(req, res)=>{

    const user = await new User(req.body)

    try{
       const savedUser = await  user.save()
        res.status(201).json(savedUser)
    }catch(error){
            res.status(400).json({message:error.message})
    }

}))


//* Read

userRoutes.get('/', expressAsyncHandler(async(req, res)=>{
    
    const users = await User.find()
    res.status(200).json(users);

}))

userRoutes.get('/:', expressAsyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(404).json({message:'User not found!'})
        return;
    } 

    res.status(200).json(user)
}))



//*Update

userRoutes.put('/:', expressAsyncHandler(async(req, res)=>{

const user = await User.findById(req.params.id)

if(!user){
    res.status(404).json({message:'User Not Found to Update'});
    return;
}

Object.assign(user, req.body)

try{
    const updatedUser = await user.save();
    res.status(200).json(updatedUser)

}catch(error){
    res.status(400).json({message:error.message})
}
}))


//* Delete

userRoutes.put('/:', expressAsyncHandler(async(req, res)=>{
    
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(404).json({message:'User not found to delete'});
        return;
    }

    try{
        await user.remove();
        res.status(204).json({message:'User Deleted Successfully'})
    }catch(error){
        res.status(400).json({message:error.message})
    }


}))

export default userRoutes;
