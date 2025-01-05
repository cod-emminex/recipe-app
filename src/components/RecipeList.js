import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch recipes from the backend
    const fetchRecipes = async () => {
      try {
        const response = await axiosInstance.get("/recipes", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data;
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          throw new Error("Data format is not an array");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (recipes.length === 0) {
    return <p>No recipes available</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
