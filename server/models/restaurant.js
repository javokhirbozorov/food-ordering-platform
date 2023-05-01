import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  homeImage: { type: String, required: true },
  description: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
