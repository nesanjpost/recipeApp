import { createContext, useState, useEffect } from "react";
import { getRecipes } from "../services/recipeServices";

// eslint-disable-next-line react-refresh/only-export-components
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const limit = 8;  

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes(limit, skip)
        setRecipes((prev) => [...prev, ...data.recipes]);
        setTotal(data.total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [skip]);

  return (
    <RecipeContext.Provider
      value={{ recipes, loading, error, skip, setSkip, total, limit }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
