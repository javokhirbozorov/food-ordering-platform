import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  sizes: [
    {
      size: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
});

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;
