import express from 'express';
import Meal from '../models/meal.js';
import expressAsyncHandler from 'express-async-handler';



const mealRoutes = express.Router();

// Get all meals
mealRoutes.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const meals = await Meal.find();
    res.status(200).json(meals);
  })
);

// Get a specific meal
mealRoutes.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
      res.status(404).json({ message: 'Meal not found' });
      return;
    }
    res.status(200).json(meal);
  })
);

// Create a new meal
mealRoutes.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const meal = new Meal(req.body);

    try {
      const savedMeal = await meal.save();
      res.status(201).json(savedMeal);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })
);

// Update a meal
mealRoutes.put(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      res.status(404).json({ message: 'Meal not found' });
      return;
    }

    // Update the meal with the new data from req.body
    Object.assign(meal, req.body);

    try {
      const updatedMeal = await meal.save();
      res.status(200).json(updatedMeal);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })
);

// Delete a meal
mealRoutes.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      res.status(404).json({ message: 'Meal not found' });
      return;
    }

    try {
      await meal.remove();
      res.status(204).json({ message: 'Meal deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

export default mealRoutes;
