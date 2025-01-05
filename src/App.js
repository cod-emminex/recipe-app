import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import Register from "./components/Register";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import Profile from "./components/Profile";
import withLoading from "./components/withLoading";

const MyComponentWithLoading = withLoading(MyComponent);
const RegisterWithLoading = withLoading(Register);
const LoginWithLoading = withLoading(Login);
const RecipeListWithLoading = withLoading(RecipeList);
const AddRecipeWithLoading = withLoading(AddRecipe);
const ProfileWithLoading = withLoading(Profile);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
        <Routes>
          <Route path="/" element={<MyComponentWithLoading />} />
          <Route path="/register" element={<RegisterWithLoading />} />
          <Route path="/login" element={<LoginWithLoading />} />
          <Route path="/recipes" element={<RecipeListWithLoading />} />
          <Route path="/add-recipe" element={<AddRecipeWithLoading />} />
          <Route path="/profile" element={<ProfileWithLoading />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
