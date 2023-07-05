import { redirect } from "react-router-dom"

export function DeleteRecipe({ params }) {
    return new Promise((resolve, reject) => {
      // Perform the deletion logic
      // Example: make an API request to delete the recipe
      fetch(`http://localhost:3000/recipe/${params}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            resolve(); // Recipe deleted successfully
          } else {
            reject(new Error("Failed to delete recipe."));
          }
        })
        .catch((error) => {
          reject(error); // Error occurred during deletion
        });
    });
  }