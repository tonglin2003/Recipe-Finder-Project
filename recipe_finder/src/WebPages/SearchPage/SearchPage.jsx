import { useLocation } from 'react-router-dom';
import DisplayMultipleCards from "../../components/common/DisplayCards/DisplayMultipleCards"
import { useEffect, useState } from "react";
import { fetchAllRecipe } from '../../RequestAPI/RecipeRequest/FetchRecipesAPI';



export default function SearchPage()
{
    const location = useLocation();
    const searchKeyword = new URLSearchParams(location.search);
    let searchTerm = searchKeyword.get('q').toLowerCase();

    // fetch recipe list from the database
    const currentList = fetchAllRecipe();

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