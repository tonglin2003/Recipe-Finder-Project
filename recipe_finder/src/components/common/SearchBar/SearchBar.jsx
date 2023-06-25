import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();


  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const searchTerm = searchText.trim();
    inputRef.current.value = "";
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
      window.location.reload(false);

    }
    
  }

  return (
    <div className="box">
      <form name="search" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input"
          name="txt"
          value={searchText}
          onChange={handleInputChange}
          id="searchBar"
          ref={inputRef}
        />
      </form>
      <i className="fas fa-search" onClick={handleFormSubmit}></i>
    </div>
  );
}