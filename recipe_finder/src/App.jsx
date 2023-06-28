import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import HomePage from './WebPages/HomePage/HomePage';
import SearchPage from './WebPages/SearchPage/SearchPage';
import UserPage from './WebPages/UserPage/UserPage';
import Breedpedia from './WebPages/Breedpedia/Breedpedia';


function App() {
  // hard core recipe list
  const [recipeList, setRecipeList] = useState([
    {"title": "Homemade Dog Treat", 
    "imgUrl": "https://www.allrecipes.com/thmb/fedSW4_1HVEqm9lXlForeBsU7rY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/133123-Peanut-Butter-and-Pumpkin-Dog-Treats-mfs-015-292437ac8ace4b019bb2a99ba7745f18.jpg",
    "rate": 4,
    "popularity": 1021,
    "tag": "dog"
  }, 

    {"title": "Peanut Butter and Banana Dog Biscuits", 
    "imgUrl": "https://www.allrecipes.com/thmb/X9frpxnckE2pYkknrriu21KfG4E=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/6443361-peanut-butter-and-banana-dog-biscuits-hokoonchis-hermana-1x1-1-6bb53653e8644bd1a29af293a1d84f8d.jpg",
    "rate": 2.5,
    "popularity":414,
    "tag": "dog"
  }, 

    {"title": "Diabetic Dog Treat", 
    "imgUrl": "https://cdn.mos.cms.futurecdn.net/WNL7w5oLD3BhdTRox8HeDS-1200-80.jpg",
    "rate": 3.5,
    "popularity":135,
    "tag": "dog"
  },

    {"title": "Doggie Birthday Cake", 
    "imgUrl": "https://www.allrecipes.com/thmb/JlKhO7Qv9EUszsb1o-ZcyWnsvq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8668108-90e7d4477a3847a29b2a071dee8bd1d1.jpg",
    "rate": 5,
    "popularity":590,
    "tag": "dog"}, 

    {"title": "Birthday Cake for Your Cat", 
    "imgUrl": "https://www.thesprucepets.com/thmb/-7-QdS23-3q_7BUi9yNrmHXww1o=/7219x0/filters:no_upscale():strip_icc()/cat-birthday-cake-5184012-06-bdb672b76cbd48e993bd2d55e294c03e.jpg",
    "rate": 4.5,
    "popularity":203,
    "tag": "cat"} 
  ]);

  // it will update the recipeList, but since it uses useState, the updated content will disappear after refreshing
  function addNewContent(newContent)
  {
    setRecipeList(prevList => [...prevList, newContent]);
  }

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
        <Route path="/search" element={<SearchPage recipeList={recipeList}/>} />
        <Route path="/user/recipe" element={<UserPage addNewContent={addNewContent}/>} />
        <Route path="/breedpedia" element={<Breedpedia breedList={breedList}/>} />

        
        
      </Routes>
    </Router>
  );
}

export default App;