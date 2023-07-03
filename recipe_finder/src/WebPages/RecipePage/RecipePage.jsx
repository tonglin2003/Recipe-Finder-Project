import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export async function loader({params})
{
    alert('hello');
    const recipeResponse = await fetch(`http://localhost:3000/recipe/${params.recipeId}`)
    const recipe = await recipeResponse.json()

    return {recipe}
}

export default function RecipePage() {
  const {recipeId} = useParams();
  const {recipe} = useLoaderData();

  return (
    <>
        {recipeId}
    </>
  );
}