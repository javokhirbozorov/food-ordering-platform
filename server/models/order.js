import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  meal: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [orderItemSchema],
  pickupTime: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'preparing', 'ready', 'completed'], default: 'pending' },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
