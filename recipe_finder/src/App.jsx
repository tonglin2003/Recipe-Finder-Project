import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'; 
import HomePage from './WebPages/HomePage/HomePage';
import SearchPage from './WebPages/SearchPage/SearchPage';
import UserPage from './WebPages/UserPage/UserPage';
import Breedpedia from './WebPages/Breedpedia/Breedpedia';
import Login from './WebPages/UserSignUpLogin/Login'
import SignUp from './WebPages/UserSignUpLogin/SignUp';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ErrorPage from './ErrorPage/ErrorPage';

import RecipePage from './WebPages/RecipePage/RecipePage';
import { loader as recipeLoader } from './WebPages/RecipePage/RecipePage';

function App() {
  function addNewContent(newContent) {
    setRecipeList(prevList => [...prevList, newContent]);
  }

  const [breedList, setBreedList] = useState([
    {
      "breed": "Pomeranian",
      "imgUrl": "https://thehappypuppysite.com/wp-content/uploads/2021/10/adult-Pomeranian-header.jpg"
    },
    {
      "breed": "Shiba Inu",
      "imgUrl": "https://people.com/thmb/rrT3xyYMQjE54AyYWTEPbRyPrX0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x505:1021x507)/hine-2000-4c3939a4483e4decae3c1e10f778afd2.jpg"
    }
  ]);

  return (
    <Router>
        <div>
          <Header />
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/user/recipe" element={<UserPage addNewContent={addNewContent} />} />
            <Route path="/breedpedia" element={<Breedpedia breedList={breedList} />} />
            <Route path="/signup/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} loader={recipeLoader}/>
            <Route path="/*" element={<ErrorPage />} />

          </Routes>
          <Footer />
        </div>
    </Router>
      );
}

export default App;

