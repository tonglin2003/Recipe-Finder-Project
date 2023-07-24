import React from "react";
import { redirect } from "react-router-dom";

export async function UserLogin({ request }) {
  const formData = await request.formData();

  try{
    // Find the user with the specified email
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
  
    if (!response.ok) {
      alert("Your email or password is incorrect");
    } 
    else{
      return redirect("/home");
    }
    return null;
    
  } catch(error){
    console.error(error);
  }

}
