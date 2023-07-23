import { redirect } from "react-router-dom";

export async function updateRecipe({params, request})
{
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    const response = await fetch(`http://localhost:3000/recipe/${params.recipeId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    });

    return redirect(`/recipe/${params.recipeId}`);

}

export async function newPost({request})
{
    const formData = await request.formData();
    const formInfo = Object.fromEntries(formData);

    if (formInfo.postType === "recipe")
    {
        // call function to post recipe in db
        postRecipe(formInfo);
        alert("Your recipe is added successfully!");

    }
    // elif (formInfo.postType === "blog")
    // {
    //     // call function to post blog in db
    // }
    return redirect('/home', {
        headers: {
          'Cache-Control': 'no-cache', // Ensure the page is not cached
          'Refresh': '0', // Refresh the page immediately
        },
      });

}

async function postRecipe( formInfo )
{
    try{
        const response = await fetch(`http://localhost:4000/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formInfo),
        });
    
        return response;
    }
    catch(error)
    {
        console.error("Error updating recipe:", error);
        throw error;
    }
}