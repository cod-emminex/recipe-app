import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Recipe = ({ recipe }) => {
  const [formData, setFormData] = useState(recipe);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { _id, title, ingredients, instructions } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onUpdate = async () => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.put(`/recipes/${_id}`, formData);
      // Optionally, handle the success (e.g., show a success message)
    } catch (err) {
      setError(err.response?.data?.msg || "Error updating recipe");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/recipes/${_id}`);
      // Optionally, handle the success (e.g., redirect or update state)
    } catch (err) {
      setError(err.response?.data?.msg || "Error deleting recipe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <textarea
        name="ingredients"
        value={ingredients}
        onChange={onChange}
      ></textarea>
      <textarea
        name="instructions"
        value={instructions}
        onChange={onChange}
      ></textarea>
      <button onClick={onUpdate} disabled={loading}>
        {loading ? "Updating..." : "Update"}
      </button>
      <button onClick={onDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Recipe;
