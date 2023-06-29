import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import HomePage from './WebPages/HomePage/HomePage';
import SearchPage from './WebPages/SearchPage/SearchPage';
import UserPage from './WebPages/UserPage/UserPage';
import Breedpedia from './WebPages/Breedpedia/Breedpedia';
import Login from './WebPages/UserSignUpLogin/Login'
import SignUp from './WebPages/UserSignUpLogin/SignUp';

function App() {
  // it will update the recipeList, but since it uses useState, the updated content will disappear after refreshing
  function addNewContent(newContent)
  {
    setRecipeList(prevList => [...prevList, newContent]);
  }

  // still thinking on if i should keep this page, so I haven't move it into db yet
  const [breedList, setbreedList] = useState(
    [
      {
        "breed": "Pomeranian",
        "imgUrl": "https://thehappypuppysite.com/wp-content/uploads/2021/10/adult-Pomeranian-header.jpg"
      },
      {
        "breed": "Shiba Inu",
        "imgUrl": "https://people.com/thmb/rrT3xyYMQjE54AyYWTEPbRyPrX0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x505:1021x507)/hine-2000-4c3939a4483e4decae3c1e10f778afd2.jpg"
      },

    ]
  );

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user/recipe" element={<UserPage addNewContent={addNewContent}/>} />
        <Route path="/breedpedia" element={<Breedpedia breedList={breedList}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        


        
        
      </Routes>
    </Router>
  );
}

export default App;