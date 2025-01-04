const express = require("express");
const { check } = require("express-validator");
const { addRecipe, getRecipes } = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Add recipe route
router.post(
  "/",
  authMiddleware,
  [
    check("title", "Title is required").not().isEmpty(),
    check("ingredients", "Ingredients are required").not().isEmpty(),
    check("instructions", "Instructions are required").not().isEmpty(),
  ],
  addRecipe
);

// Get recipes route
router.get("/", authMiddleware, getRecipes);

module.exports = router;
