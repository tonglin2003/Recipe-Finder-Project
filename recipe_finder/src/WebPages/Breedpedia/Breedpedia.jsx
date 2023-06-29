/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

// display multiple recipe cards, takes in attr, recipeList, an array of recipe obj
import DisplayMultipleCards from "../../components/common/DisplayCards/DisplayMultipleCards";

import '../../components/common/Button-74.css';
import './Breedpedia.css'

function Breedpedia({ breedList }) {

  return (
    <>
      <section className='header-img2'>
        <div className='bg-blue-500' style={{ height: "50vh" }}>
          <div className='header-text'>
            <div className='content'>
              <h2>Meet more lovely furry friend</h2>
              <h1 className='underline-heading'>Here and Now</h1>
              <br></br>
              <button className='button-74 mt-3'>Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto w-75'>
        <DisplayMultipleCards breedList={breedList}/>
      </section>
    </>
  )
}

export default Breedpedia;