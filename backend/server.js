const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://emminex:<admin@recipe-app.stvvj.mongodb.net/?retryWrites=true&w=majority&appName=Recipe-app",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Use Routes
app.use("/api/auth", authRoutes);

app.get("/api", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
