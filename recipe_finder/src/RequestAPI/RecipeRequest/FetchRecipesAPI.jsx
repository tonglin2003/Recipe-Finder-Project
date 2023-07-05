import { useEffect, useState } from "react";


export function fetchAllRecipe()
{
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    let ignoreUseEffect = false;

    async function fetchRecipes() {
      const response = await fetch('http://localhost:3000/recipe');
      const recipes = await response.json();

      if (!ignoreUseEffect) setCurrentList(recipes);
      return currentList;
    }

    fetchRecipes();

    return () => {
      ignoreUseEffect = true;
    };
  }, []);

  return currentList;
}

// allRecipeLoader, the loader that will display all recipes in db
export async function allRecipeLoader({params})
{
    const allRecipeResponse = await fetch(`http://localhost:3000/recipe/`)
    const allRecipe = await allRecipeResponse.json()
    return allRecipe;
}

//recipeLoader, the loader for RecipePage that display one recipe in a whole page, 
// it will need the id of the recipe to display
export async function singleRecipeLoader({params})
{
    const recipeResponse = await fetch(`http://localhost:3000/recipe/${params.recipeId}`)
    const recipe = await recipeResponse.json()

    return {recipe};
}