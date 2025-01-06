import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axiosInstance.get(`/recipes/${id}`);
        setFormData(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || "Error fetching recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const { title, ingredients, instructions } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/recipes/${id}`, formData);
      navigate(`/recipes/${id}`);
    } catch (err) {
      setError(err.response?.data?.msg || "Error updating recipe");
    }
  };

  return (
    <div className="container">
      <h2>Edit Recipe</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            value={ingredients}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            value={instructions}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Update Recipe
        </button>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default EditRecipe;
