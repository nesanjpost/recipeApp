import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import { Contact } from "./pages/Contact";
import Layout from "./components/layout";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <RecipeProvider basename="/recipeApp"> 
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
