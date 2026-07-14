export const filterRecipes = (recipes, search, selectedRecipe = "All") => {
  const query = search.toLowerCase().trim();
  return recipes.filter((recipe) => {
    const matchBySearch =
    query === "" ||
    recipe.name.toLowerCase().includes(query) ||
    recipe.mealType.some((type) => type.toLowerCase().includes(query)) ||
    recipe.tags.some((tag) => tag.toLowerCase().includes(query));
  const matchBymealType =
    selectedRecipe === "All" || recipe.mealType.includes(selectedRecipe);
  return matchBySearch && matchBymealType;
  })
};
