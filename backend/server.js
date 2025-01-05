const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const profile = require("./routes/profile");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://emminex:admin@recipe-app.stvvj.mongodb.net/?retryWrites=true&w=majority&appName=Recipe-app"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use(bodyParser.json());
app.use("/api/profile", profile);

app.get("/api", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
