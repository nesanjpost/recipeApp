import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import { useEffect, useState } from "react";
import { Contact } from "./pages/Contact";
import Layout from "./components/layout";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://dummyjson.com/recipes?limit=50");
  //     const data = await response.json();
  //     setRecipes(data.recipes);
  //   };
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <RecipeProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </RecipeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
