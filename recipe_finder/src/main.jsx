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
import Community from './WebPages/Community/Community';
import Login from './WebPages/Auth/Login';
import SignUp from './WebPages/Auth/SignUp';
import Header, {loader as headLoader } from './components/common/Header/Header';
import RecipePage from './WebPages/RecipePage/RecipePage';
import ErrorPage from './ErrorPage/ErrorPage';
import EditRecipe from './WebPages/UserPage/MyRecipe/EditRecipe';

// website loader
import { singleRecipeLoader } from './RequestAPI/RecipeRequest/FetchRecipesAPI';
import { allRecipeLoader } from './RequestAPI/RecipeRequest/FetchRecipesAPI';
import { FetchAllBlog as FetchAllBlogLoader } from './RequestAPI/BlogRequest/FetchBlog';

// website action
import { updateRecipe } from './RequestAPI/RecipeRequest/UpdateRecipesAPI';
import { DeleteRecipe } from './RequestAPI/RecipeRequest/DeleteRecipesAPI'; // the function was called inside the "user/myrecipe" as a function, not action
import { UserSignUp } from './RequestAPI/Auth/UserSignUp';
import { UserLogin } from './RequestAPI/Auth/UserLogin';
import { newPost } from './RequestAPI/RecipeRequest/UpdateRecipesAPI';

// AuthContext!!
import AuthProvider from './Contexts/AuthContext';
import ProtectedRoute from './RequestAPI/ProtectedRoute';

function App() {


  // createRoutesFromElements, it is used to keep the route component and doesn't have to use the object way
  const routes = createRoutesFromElements(
    <Route path="/" element={<Header />} errorElement={<ErrorPage />} loader={headLoader}>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="/home" element={<HomePage />} loader={allRecipeLoader}/>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/community" element={<Community/>} loader={FetchAllBlogLoader} />
      <Route path="/signup" element={<SignUp />} action={UserSignUp} />
      <Route path="/login" element={<Login />} action={UserLogin}/>
      <Route path="/recipe/:recipeId" element={<RecipePage />} loader={singleRecipeLoader} />

      <Route path="/user/myrecipe" element={
        <ProtectedRoute>
          <UserPage pageType={'myrecipe'}/>
        </ProtectedRoute>
      } loader={allRecipeLoader}/>

      <Route path="/user/post" element={
        <ProtectedRoute>
          <UserPage pageType={'post'}/>
        </ProtectedRoute>
        }
         action={newPost}/>
      
      <Route path="/user/edit/:recipeId" element={
        <ProtectedRoute>
          <EditRecipe/>
        </ProtectedRoute>
        } 
        loader={singleRecipeLoader} action={updateRecipe}/>
      

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
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
