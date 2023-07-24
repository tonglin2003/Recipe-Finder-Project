import { redirect } from "react-router-dom";

export async function UserSignUp({ params, request }) {
  const formData = await request.formData();
  const userInfo = Object.fromEntries(formData.entries()); // Retrieve entries from formData

  try {
    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (response.ok) {
      alert("You are signed up");
      return redirect("/home"); // Return the redirect function
    } 
    else {
      const errorData = await response.json(); // Assuming the server sends error information in the response body
      console.log(errorData);
      alert(errorData.errors);
      return null;
    }
  } catch (error) {
    console.error(error);
    alert(`There was an error: ${error.message}`);
    return null; // Return null to indicate an error
  }
}
