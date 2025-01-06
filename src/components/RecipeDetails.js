import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axiosInstance.get(`/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || "Error fetching recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
