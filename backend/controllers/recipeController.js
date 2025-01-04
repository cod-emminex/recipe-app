const Recipe = require("../models/Recipe");

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      user: req.user.id,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to add recipe" });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve recipes" });
  }
};

module.exports = { addRecipe, getRecipes };
