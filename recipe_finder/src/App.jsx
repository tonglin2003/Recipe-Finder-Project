import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SearchPage from './SearchPage/SearchPage';

function App() {
  // hard core recipe list
  const recipeList = [
    {"title": "Homemade Dog Treat", 
    "imgUrl": "https://www.allrecipes.com/thmb/fedSW4_1HVEqm9lXlForeBsU7rY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/133123-Peanut-Butter-and-Pumpkin-Dog-Treats-mfs-015-292437ac8ace4b019bb2a99ba7745f18.jpg",
    "rate": 4.5,
    "popularity": 1021}, 

    {"title": "Peanut Butter and Banana Dog Biscuits", 
    "imgUrl": "https://www.allrecipes.com/thmb/X9frpxnckE2pYkknrriu21KfG4E=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/6443361-peanut-butter-and-banana-dog-biscuits-hokoonchis-hermana-1x1-1-6bb53653e8644bd1a29af293a1d84f8d.jpg",
    "rate": 2.5,
    "popularity":414}, 

    {"title": "Diabetic Dog Treat", 
    "imgUrl": "https://cdn.mos.cms.futurecdn.net/WNL7w5oLD3BhdTRox8HeDS-1200-80.jpg",
    "rate": 3.5,
    "popularity":135}, 

    {"title": "Doggie Birthday Cake", 
    "imgUrl": "https://www.allrecipes.com/thmb/JlKhO7Qv9EUszsb1o-ZcyWnsvq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8668108-90e7d4477a3847a29b2a071dee8bd1d1.jpg",
    "rate": 5,
    "popularity":590}, 

    {"title": "Birthday Cake for Your Cat", 
    "imgUrl": "https://www.thesprucepets.com/thmb/-7-QdS23-3q_7BUi9yNrmHXww1o=/7219x0/filters:no_upscale():strip_icc()/cat-birthday-cake-5184012-06-bdb672b76cbd48e993bd2d55e294c03e.jpg",
    "rate": 4.5,
    "popularity":203} 
  ];

  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage recipeList={recipeList}/>} />
        <Route path="/" element={<HomePage recipeList={recipeList}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;