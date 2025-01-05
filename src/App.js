import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import Register from "./components/Register";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe App</h1>
          <h2>React, Node, Express, MongoDB</h2>
          <nav>What would you like to do?</nav>
        </header>
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
