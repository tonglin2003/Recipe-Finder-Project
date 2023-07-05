// react library
import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// website pages
import HomePage from './WebPages/HomePage/HomePage';
import SearchPage from './WebPages/SearchPage/SearchPage';
import UserPage from './WebPages/UserPage/UserPage';
import Breedpedia from './WebPages/Breedpedia/Breedpedia';
import Login from './WebPages/UserSignUpLogin/Login';
import SignUp from './WebPages/UserSignUpLogin/SignUp';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import RecipePage from './WebPages/RecipePage/RecipePage';
import ErrorPage from './ErrorPage/ErrorPage';
import EditRecipe from './WebPages/UserPage/MyRecipe/EditRecipe';

// website loader
import { singleRecipeLoader } from './RequestAPI/RecipeRequest/FetchRecipesAPI';
import { allRecipeLoader } from './RequestAPI/RecipeRequest/FetchRecipesAPI';
import { updateRecipe } from './RequestAPI/RecipeRequest/UpdateRecipesAPI';
import { DeleteRecipe } from './RequestAPI/RecipeRequest/DeleteRecipesAPI'; // the function was called inside the "user/myrecipe" as a function, not action
import { UserSignUp } from './RequestAPI/UserAccountRequest/UserSignUp';
import { UserLogin } from './RequestAPI/UserAccountRequest/UserLogin';

function App() {
  const [breedList, setBreedList] = useState([
    {
      breed: 'Pomeranian',
      imgUrl: 'https://thehappypuppysite.com/wp-content/uploads/2021/10/adult-Pomeranian-header.jpg',
    },
    {
      breed: 'Shiba Inu',
      imgUrl:
        'https://people.com/thmb/rrT3xyYMQjE54AyYWTEPbRyPrX0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x505:1021x507)/hine-2000-4c3939a4483e4decae3c1e10f778afd2.jpg',
    },
  ]);

  // createRoutesFromElements, it is used to keep the route component and doesn't have to use the object way
  const routes = createRoutesFromElements(
    <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/breedpedia" element={<Breedpedia breedList={breedList} />} />
      <Route path="/signup" element={<SignUp />} action={UserSignUp} />
      <Route path="/login" element={<Login />} action={UserLogin}/>
      <Route path="/recipe/:recipeId" element={<RecipePage />} loader={singleRecipeLoader} />

      <Route path="/user/myrecipe" element={<UserPage pageType={'myrecipe'}/>} loader={allRecipeLoader}/>
      <Route path="/user/post" element={<UserPage pageType={'post'}/>}/>

      <Route path="/user/edit/:recipeId" element={<EditRecipe/>} loader={singleRecipeLoader} action={updateRecipe}/>

    </Route>
  );

  // create browser router
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
