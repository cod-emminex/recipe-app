import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { title, ingredients, instructions } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.post("/recipes", formData);
      // Optionally, you can redirect or update the state after successful creation
    } catch (err) {
      setError(err.response?.data?.msg || "Error creating recipe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Ingredients</label>
          <textarea
            name="ingredients"
            value={ingredients}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Instructions</label>
          <textarea
            name="instructions"
            value={instructions}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <div>Error: {error}</div>}
      </form>
    </div>
  );
};

export default AddRecipe;
