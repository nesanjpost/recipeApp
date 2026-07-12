import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRatingColor } from "../utils/rating";
import { CardButton } from "../components/CardButton";

// name
// ingredients: [];
// instructions: [];
// prepTimeMinutes: 20;
// cookTimeMinutes: 15;
// servings: 4;
// difficulty: "easy";
// cuisine: "Italian";
// caloriesPerServing: 300;
// tags: ["pizza", "Italian"];
// userId: 166;
// image: "";
// rating: 4.6;
// reviewCount: 98;
// mealType: ["Dinner"]

const RecipeDetails = () => {
  const [getRecipe, setGetRecipe] = useState([]);
  const param = useParams();
  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchById = await fetch(
        `https://dummyjson.com/recipes/${param.id}`,
      );
      const response = await fetchById.json();
      setGetRecipe(response);
    };
    fetchRecipe();
  }, [param]);

  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between w-100">
        <div className="col-lg-6">
          <div className="d-flex justify-content-between gap-2">
            <span className="h1 text-dark-emphasis">{getRecipe.name}</span>
            <div className="d-flex mt-2 col-4 h-100 align-items-center">
              <span
                className={`text-light rounded-1 p-1 ${getRatingColor(getRecipe.rating)}`}
              >
                {getRecipe.rating}
                <i className="bi bi-star-fill p-1"></i>
              </span>
              <span className="fw-bold mx-2 border-bottom align-center">
                {getRecipe.reviewCount}
              </span>
              <span className="fst-italic border-bottom text-secondary">
                Reviews
              </span>
            </div>
          </div>
          <div className="d-flex flex-column">
            <span className="text-secondary">
              {getRecipe.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-warning text-dark-emphasis p-2 m-1"
                >
                  {tag}
                </span>
              ))}
            </span>
            <div className="p-1 gap-2 d-flex text-light">
              <span className="bg-danger rounded p-1 px-2">
                ⏱️ {getRecipe.prepTimeMinutes} mins
              </span>
              <span className="bg-danger rounded p-1 px-2">
                🍽️ Serving {getRecipe.servings}
              </span>
              <span className="bg-danger rounded p-1 px-2">
                🔥 Calories: {getRecipe.caloriesPerServing}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-gradient mt-4 p-3 d-flex flex-column rounded-5 shadow-lg flex-lg-row gap-2">
        <div className="col-12 col-lg-4">
          <img
            className="rounded-5 shadow"
            src={getRecipe.image}
            alt={getRecipe.name}
            width="100%"
          />
          <div className="mt-4 d-flex justify-content-center">
          <CardButton recipe={getRecipe} />
          </div>
        </div>
        <div className="container col-12 col-lg-8 d-flex flex-column align-items-end">
          <div>
            <p className="h3 border-bottom text-danger">Instructions</p>
            <ul className="list py-2">
              {getRecipe.instructions?.map((instruction, index) => (
                <li key={index} className="border-bottom text-secondary">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="h3 border-bottom text-danger">Ingredients</p>
            <div className="d-flex flex-wrap py-2">
              {getRecipe.ingredients?.map((instruction, index) => (
                <span
                  key={index}
                  className="badge bg-success text-light p-2 m-1"
                >
                  {instruction}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
