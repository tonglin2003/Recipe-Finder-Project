import React from 'react';
import DisplayRecipeSingleCard from "./DisplayRecipeSingleCard";
import DisplayBlogCard from './DisplayBlogCard'; 

export default function DisplayMultipleCards({ recipeList, blogList })
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
                            blogList.map((blog, index) => {
                                return <DisplayBlogCard blog={blog} key={index}/>;
                            })
                        )
                    }

                </div>
            </div>
        </div>
    
        </>
     );
}