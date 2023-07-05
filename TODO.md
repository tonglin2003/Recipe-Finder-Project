One thing to note:
  - the encryption of the password will be performed on the server side (node.js) for better security
  - also try encrypting the recipe id!!
      - frontend will get the encrypted recipe_id
      - the backend will give the encrypted recipe_id to the frontend.
          step:
            1. fetch all recipes to the backend
            2. backend will encrypt it
            3. give it to frontend
            4. frontend will display encrypted recipe_id

            5. when user click on the "see more", url is "{baseURL}/recipe/encryptedRecipeId"
            6. it will trigger the load method in the Route
            7. Request send to backend and get param somehow based on the backend framework
            8. backend decrypt the variable encryptedRecipeId
            9. fetch it from the database
            10. encrypt any sensitive data (but seems like there's none)
            11. return to the frontend and display

TODO: complete the login system, if no surprise, it will be done with node.js
TODO: connect in DB, userId with recipes and blogs
    - will require to store userId somewhere in the framework (prob in the backend)
