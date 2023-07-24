import React from 'react';
import { useLoaderData } from 'react-router-dom';


export default function RecipePage() {
  const {recipe} = useLoaderData();
  console.log(recipe);

  return (
    <>
      <div className='d-flex justify-content-center mt-5 text-center my-5' >
        <div>
          <img src={recipe.imgUrl} alt="recipePhoto" className='rounded'style={{maxHeight:'200px'}}/>
          <h1 className='mt-4'>{recipe.title}</h1>
          <p>{recipe.content}</p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis auctor justo eget commodo. Proin non sem vel orci congue vestibulum quis vel lectus. Aenean non ante posuere, auctor mauris vel, convallis risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nisl quam, cursus in ultrices sit amet, accumsan id tortor. Nullam interdum sapien tempus mauris tincidunt, non pulvinar lorem condimentum. Cras malesuada sollicitudin mauris a dictum.</p> */}
        </div>
      </div>
    </>
  );
}