import { redirect } from "react-router-dom";

export async function UserLogin({ request }) {
  const formData = await request.formData();
  const loginForm = Object.fromEntries(formData); // Fetch user data entered

  // Find the user with the specified email
  const response = await fetch(`http://localhost:3000/user?email=${loginForm.email}`);

  if (response.ok) {
    const users = await response.json();

    if (users.length > 0 && users[0].password === loginForm.password) {
      alert("Login successful!");
      return redirect("/home");
    }
  } else {
    const errorMs = await response.json();
    alert(errorMs.message);
  }

  alert("Invalid email or password");
  return redirect("/login");
}
