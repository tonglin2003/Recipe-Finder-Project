import { redirect } from "react-router-dom";

export async function updateRecipe({params, request})
{
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const changedRecipe = {
        ...updates,
    }

    const response = await fetch(`http://localhost:3000/recipe/${params.recipeId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(changedRecipe)
    });

    return redirect(`/recipe/${params.recipeId}`);

}
