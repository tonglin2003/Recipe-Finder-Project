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
        postRecipe();
    }
    // elif (formInfo.postType === "blog")
    // {
    //     // call function to post blog in db
    // }
    return redirect('/home');

}

async function postRecipe( formInfo )
{
    try{
        const response = await fetch(`http://localhost:3000/blog`, {
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