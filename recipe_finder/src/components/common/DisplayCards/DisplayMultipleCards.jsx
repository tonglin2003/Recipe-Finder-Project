import React from 'react';
import DisplayRecipeSingleCard from "./DisplayRecipeSingleCard";
import DisplayBreedCard from './DisplayBreedCard'; 

export default function DisplayMultipleCards({ recipeList, breedList })
{
     return(
        <>
        <div className=''>
            
            <div className="container text-center">
                <div className="row mx-auto justify-content-center" >
                    {
                        recipeList? 
                        (recipeList.map((recipe, index) => {
                            return <DisplayRecipeSingleCard recipe={recipe} key={index}/>;
                        })) 
                        :
                        (
                            breedList.map((breed, index) => {
                                return <DisplayBreedCard breed={breed} key={index}/>;
                            })
                        )
                    }

                </div>
            </div>
        </div>
    
        </>
     );
}