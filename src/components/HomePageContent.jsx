import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import LoadingSpinner from "./LoadingSpinner";
import { getAllRecipes } from "../services/recipeServices";

const HomePageContent = () => {
  const [recipe, setRecipe] = useState([]);
  const { loading, error } = useContext(RecipeContext);

  // const limit = 50
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecipes();

        const mealTypeMap = new Map();

        data.recipes.forEach((recipe) => {
          recipe.mealType.forEach((mealType) => {
            if (!mealTypeMap.has(mealType)) {
              mealTypeMap.set(mealType, {
                mealType,
                image: recipe.image,
              });
            }
          });
        });

        setRecipe(Array.from(mealTypeMap.values()));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchData();
  }, []);

  console.log("recipeeee", recipe);

  if (loading) return <LoadingSpinner />;
  if (error) return <h3>{error}</h3>;

  return (
    <>
      <div className="home-container p-5">
        <div className="card-home-container container d-flex gap-5 rounded-4 shadow-bottom">
          {recipe.map((recipe) => (
            <div
              key={recipe.id}
              className="card card-home rounded-4 shadow flex-shrink-0"
              style={{ width: "20rem" }}
            >
              <img
                src={recipe.image}
                className="card-img card-home-img flex-shrink-0 rounded-4"
                alt={recipe.name}
              />
               <div className="gradient-overlay rounded-4">
              <p className="card-overlay h1 text-center text-light text-uppercase">
                {recipe.mealType}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
