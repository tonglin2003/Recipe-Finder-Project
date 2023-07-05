import React from "react";
import { useNavigate, useParams, useLoaderData, Link } from "react-router-dom";
import EditRecipe from "./EditRecipe";
import '../../../components/common/Button-74.css';
import { DeleteRecipe } from "../../../RequestAPI/RecipeRequest/DeleteRecipesAPI";

export default function MyRecipe() {
  const recipes = useLoaderData();
  const navigate = useNavigate();

  const handleDeleteClick = (recipeId) => {

    if (confirm("Are you sure you want to delete this note?")) {
        DeleteRecipe({ params: recipeId })
        .then(() => {
            alert("Recipe deleted successfully!");
            navigate("/user/myrecipe"); // Navigate to desired route after delete
        })
        .catch((error) => {
            alert("Failed to delete recipe.");
            console.log(error);
        });
    }    
  };

  return (
    <>
      <div className="my-5">
        <h1>My Recipe</h1>
        <table className="table">
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.title}</td>
                <td>
                  <Link to={`/user/edit/${recipe.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteClick(recipe.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
