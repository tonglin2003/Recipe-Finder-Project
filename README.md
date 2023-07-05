# Recipe-Finder-Project

Iteration 1: 
  - the searching function is available in the navbar, through entering searching keyword, it will lead to a new page with recipe matches the searching keyword


Iteration 2: {url} is in format of 'http://localhost:5173'
  - filter function: located on the "{url}/", "filer by tag". Apply filter to the recipe, currently, there's only dog and cat tag. Note: it requires the user to click on the tag twice to display the correct recipes. (need to fix)
  - Add new recipe: Located in "{url}/user/recipe", or by clicking on "My Recipe" on the navbar. There is a form, allows users to post their own recipes.
        - note: since there's only use state in use, the new recipe made by the user will disappear after refreshing.
    
Iteration 3:
  - added a new page for breed

Iteration 4: 
  - replaced all hared core list to json-server, including the homepage and the search page.
  - also allowed the user to post their own recipe onto the homepage and save it in the db.json

Iteration 5:
  - I have implemented router for React pages from the beginning, but it was the different method of routing from the tutorial. And it would take a long time to convert all current routes to another format. I have asked Ahsan Abbasi for permission to keep the current format. There's not much difference between the two router methods, but the current method I'm using is easier to read and add on pages for me.
        - Please feel free to Slack or leave a comment on Blackboard if I need to change my route methods.
- Also added an error page, whenever the user is accessing an URL that is not in the router, it would show up and allow the user to return to the previous page.


Iteration 6: (Update and delete)
  - Update function is located inside the "{url}/user/myrecipe" and triggered by clicking the Edit button
  - the delete function is located next to the edit button

