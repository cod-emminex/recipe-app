import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import Register from "./components/Register";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import Profile from "./components/Profile";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipe from "./components/EditRecipe";
import SearchResultsPage from "./pages/SearchResultsPage";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import withLoading from "./components/withLoading";
import "./styles.css";

const MyComponentWithLoading = withLoading(MyComponent);
const RegisterWithLoading = withLoading(Register);
const LoginWithLoading = withLoading(Login);
const RecipeListWithLoading = withLoading(RecipeList);
const AddRecipeWithLoading = withLoading(AddRecipe);
const ProfileWithLoading = withLoading(Profile);
const RecipeDetailsWithLoading = withLoading(RecipeDetails);
const EditRecipeWithLoading = withLoading(EditRecipe);

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MyComponentWithLoading />} />
            <Route path="/register" element={<RegisterWithLoading />} />
            <Route path="/login" element={<LoginWithLoading />} />
            <Route path="/recipes" element={<RecipeListWithLoading />} />
            <Route path="/recipes/:id" element={<RecipeDetailsWithLoading />} />
            <Route path="/add-recipe" element={<AddRecipeWithLoading />} />
            <Route
              path="/edit-recipe/:id"
              element={<EditRecipeWithLoading />}
            />
            <Route path="/profile" element={<ProfileWithLoading />} />
            <Route path="/search" element={<SearchResultsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
