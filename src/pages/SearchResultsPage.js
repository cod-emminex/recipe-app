import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
  const query = useQuery();
  const searchQuery = query.get("query");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axiosInstance.get(
          `/recipes/search?query=${searchQuery}`
        );
        setRecipes(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || "Error fetching search results");
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Search Results</h2>
      {recipes.length > 0 ? (
        <ul className="list-group">
          {recipes.map((recipe) => (
            <li key={recipe._id} className="list-group-item">
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients}</p>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
