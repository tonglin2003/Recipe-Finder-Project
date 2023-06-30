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
