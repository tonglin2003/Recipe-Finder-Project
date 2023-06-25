import React from 'react';
import DisplaySingleCard from "./DisplaySingleCard";

export default function DisplayMultipleCards({ recipeList })
{
     return(
        <>
        <div className=''>
            
            <div className="container text-center">
                <div className="row mx-auto justify-content-center" >
                    {
                        recipeList.map((recipe, index) => {
                            return <DisplaySingleCard recipe={recipe} key={index}/>;
                        })
                    }
                </div>
            </div>
        </div>
    
        </>
     );
}