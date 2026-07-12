import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRatingColor } from "../utils/rating";
import { CardButton } from "../components/CardButton";
import { RecipeContext } from "../context/RecipeContext";
import SelectionTabs from "../components/SelectionTabs";
import LoadingSpinner from "../components/LoadingSpinner";
import LoadMore from "../components/LoadMore";
import { getAllRecipes } from "../services/recipeServices";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState("All");
  const { loading, error, setSkip, total, limit } = useContext(RecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData()
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <h3>{error}</h3>;

  const filteredRecipes =
    selectedMealType === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.mealType.includes(selectedMealType));

  return (
    <>
      <div className="mt-4 p-4">
        <p className="h1 p-2 text-bg-danger text-center shadow rounded-2">
          Recipe List
        </p>
        <SelectionTabs
          selectedMealType={selectedMealType}
          setSelectedMealType={setSelectedMealType}
        />
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="card p-1 border border-danger bg-danger-subtle rounded-4 shadow-lg"
              style={{ width: "18rem" }}
            >
              <img
                src={recipe.image}
                className="card-img-top rounded-4 px-2 pt-2"
                alt={recipe.name}
              />
              <div className="card-body d-flex flex-column align-items-center gap-2">
                <p className="h5 text-dark">{recipe.name}</p>
                <div className="w-100">
                  <span className="bg-warning float-start rounded p-1 px-2">
                    ⏱️ {recipe.prepTimeMinutes} mins
                  </span>
                  <span
                    className={`text-light float-end rounded-1 p-1 ${getRatingColor(recipe.rating)}`}
                  >
                    {recipe.rating}
                    <i className="bi bi-star-fill p-1"></i>
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-column gap-2 mb-2">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="btn text-decoration-none m-2 btn-danger shadow text-light rounded-3"
                >
                  More Details
                </Link>
                <span className="w-100 px-2">
                  <CardButton recipe={recipe} />
                </span>
              </div>
            </div>
          ))}
        </div>
        <LoadMore
          loading={loading}
          hasMore={recipes.length < total}
          onLoadMore={() => setSkip((prev) => prev + limit)}
        />
      </div>
    </>
  );
};

export default Recipes;
