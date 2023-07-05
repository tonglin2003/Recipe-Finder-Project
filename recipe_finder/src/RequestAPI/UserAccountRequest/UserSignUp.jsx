import { redirect } from "react-router-dom";

export async function UserSignUp({ params, request }) {
    const formData = await request.formData();
    const userInfo = Object.fromEntries(formData.entries()); // Retrieve entries from formData

    const response = fetch(`http://localhost:3000/user`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
        .then((res) => {
        if (res.ok) {
            alert("You are signed up");
        }
        })
        .catch((error) => {
        alert(`There was an error: ${error}`);
        });

    return redirect("/home");
}
