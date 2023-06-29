import { useLocation } from 'react-router-dom';
import DisplayMultipleCards from "../../components/common/DisplayCards/DisplayMultipleCards"
import { useEffect, useState } from "react";



export default function SearchPage()
{
    const location = useLocation();
    const searchKeyword = new URLSearchParams(location.search);
    let searchTerm = searchKeyword.get('q').toLowerCase();
    const [currentList, setCurrentList] = useState([]);

    
      // fetch for recipes from the database
      useEffect( () => {
        let ignoreUseEffect = false;
    
        async function fetchRecipes()
        {
          const response = await fetch('http://localhost:3000/recipe');
          const recipes = await response.json();
    
          if (!ignoreUseEffect) setCurrentList(recipes);
          return currentList;
        }
    
        fetchRecipes();
    
        return () => {
          ignoreUseEffect = true;
        }
    
      }, []);

      const filteredRecipe = currentList.filter(element => {
        return element['title'].toLowerCase().includes(searchTerm);
      });


    return(
        <>
                <section className='recipeList mx-auto w-75'>
                    <h1 className='text-center' id="recipeTitle">Pet Recipe</h1>
                    <p className='text-center' id="recipeSubtitle">Browse recipes for wholesome and homemade pet food and treats for your furry friends.</p>
                    <hr className='w-75 mx-auto'></hr>
                    <DisplayMultipleCards recipeList={filteredRecipe}/>
                </section>
        </>
    );
}