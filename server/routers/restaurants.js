import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Restaurant from '../models/restaurant.js';
const restaurantRoutes = express.Router();


//*Read

restaurantRoutes.get('/', expressAsyncHandler(async(req, res)=>{
    const restaurant = await Restaurant.find();

    res.status(200).json(restaurant);
}));

restaurantRoutes.get('/:id', expressAsyncHandler(async(req, res)=>{
    const restaurant = await Restaurant.findById(req.params.id);

    if(!restaurant){
        res.status(404).json({message:'Restaurant not Found'})
    }

    res.status(200).json(restaurant);
}))


//*Crud
restaurantRoutes.post('/', expressAsyncHandler(async(req, res)=>{
    const restaurant = await new Restaurant(req.body);


    try{
        await restaurant.save();
        res.status(200).json(restaurant)
    }catch(error){
        res.status(400).json({message:error.message})
    }

    restaurant.save();

    res.status(201).json(restaurant);

    restaurant.save()
}))



//* Update

restaurantRoutes.put('/:id', expressAsyncHandler(async(req, res)=>{
    const restaurant = await Restaurant.findById(req.params.id);

    if(!restaurant){
        res.status(404).json({message:'Restaurant Not Found to Update'});
        return;
    }

    Object.assign(restaurant, req.body)

    try{
        const updatedRestaurant = await restaurant.save();

        res.status(200).json(updatedRestaurant);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}))


//*Delete

restaurantRoutes.delete('/:id', expressAsyncHandler(async(req, res)=>{
    const restaurant = await Restaurant.findById(req.params.id);
    if(!restaurant){
        res.status(404).json({message:'Restaurant Not Found to Delete'});
        return;
    }

    try{
        await restaurant.remove();
        res.status(204).json({message:"Restaurant Deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}))

export default restaurantRoutes;
