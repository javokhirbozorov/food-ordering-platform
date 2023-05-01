import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/order.js';
const ordersRoutes = express.Router();



//*Read

ordersRoutes.get('/', expressAsyncHandler(async(req, res)=>{
    const order = await Order.find();

    res.status(200).json(order);
}));

ordersRoutes.get('/:id', expressAsyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id);

    if(!Order){
        res.status(404).json({message:'Order not Found'})
    }

    res.status(200).json(order);
}))


//*Crud
ordersRoutes.post('/', expressAsyncHandler(async(req, res)=>{
    const order = await new Order(req.body);


    try{
        await Order.save();
        res.status(200).json(order)
    }catch(error){
        res.status(400).json({message:error.message})
    }

    Order.save();

    res.status(201).json(order);

    Order.save()
}))



//* Update

ordersRoutes.put('/:id', expressAsyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id);

    if(!Order){
        res.status(404).json({message:'Order Not Found to Update'});
        return;
    }

    Object.assign(Order, req.body)

    try{
        const updatedOrder = await Order.save();

        res.status(200).json(updatedOrder);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}))


//*Delete

ordersRoutes.delete('/:id', expressAsyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id);
    if(!Order){
        res.status(404).json({message:'Order Not Found to Delete'});
        return;
    }

    try{
        await Order.remove();
        res.status(204).json({message:"Order Deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}))


export default ordersRoutes;
