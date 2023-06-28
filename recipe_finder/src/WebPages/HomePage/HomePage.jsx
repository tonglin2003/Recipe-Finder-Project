/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';

// display multiple recipe cards, takes in attr, recipeList, an array of recipe obj
import DisplayMultipleCards from "../../components/common/DisplayCards/DisplayMultipleCards";

// return filter dropdown in frontend, after user select a tag, it will return the tag to page called the function
// attr: applyFilter (require the type of function)
// inside the FilterThroughTags, it will call applyFilter(tagInString)
import FilterThroughTags from "../../components/common/FilterThroughTags/FilterThroughTags";

// attr: applyOrderBy (require the type of function)
// inside the OrderBySelection, it will call applyOrderBy(selectionInString)
import OrderBySelection from "../../components/common/OrderBySelection/OrderBySelection";

import './HomePage.css';
import '../../components/common/Button-74.css';

function HomePage({ recipeList }) {
  const [currentList, setCurrentList] = useState(recipeList);

  const applyFilter = (tag) => {
    setCurrentList(recipeList.filter(element => element['tag'] === tag));
  }

  const applyOrderBy = (order) => {
    const orderedList = [...currentList].sort((element1, element2) => element2[order] - element1[order]);
    setCurrentList(orderedList);
    console.log(currentList);
  }
  
  return (
    <>
      <Header />
      <section className='header-img'>
        <div className='bg-blue-500' style={{ height: "50vh" }}>
          <div className='header-text'>
            <div className='content'>
              <h2>Try some new recipe for your </h2>
              <h1 className='underline-heading'>Furry Friend</h1>
              <br></br>
              <button className='button-74 mt-3'>Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className='recipeList mx-auto w-75'>
        <h1 className='text-center' id="recipeTitle">Pet Recipe</h1>
        <p className='text-center' id="recipeSubtitle">Browse recipes for wholesome and homemade pet food and treats for your furry friends.</p>
        <div className="d-flex w-75 mx-auto">
          <div className="">
            <FilterThroughTags applyFilter={applyFilter} />
          </div>
          <div className="w-100 d-flex justify-content-end">
            <OrderBySelection applyOrderBy={applyOrderBy} />
          </div>
        </div>
        <hr className='w-75 mx-auto'></hr>

        

        <div id="displayCards">
          <DisplayMultipleCards recipeList={currentList}/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage;