
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


//* Routes import
import mealsRoutes from './routers/meals.js';
import ordersRoutes from './routers/orders.js';
import restaurantsRoutes from './routers/restaurants.js';
import usersRoutes from './routers/users.js';

//
dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, food ordering platform!');
});






mongoose.connect(process.env.MONGODB_URI, {
   
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://localhost:27017/food-ordering-platform",
  {
  }
);



//*Routes




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
 


  console.log(`Server is running on port ${PORT}`);
});
