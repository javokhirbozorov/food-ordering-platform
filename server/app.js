import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//* Routes import
import mealRoutes from "./routers/meals.js";
import orderRoutes from "./routers/orders.js";
import restaurantRoutes from "./routers/restaurants.js";
import userRoutes from "./routers/users.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {});
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://localhost:27017/food-ordering-platform",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();

app.use(cors());
app.use(express.json());

//*Routes

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
