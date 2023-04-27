import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "../Navbar/SearchBar.css";
import axios from '../axios'
import {API_KEY}from '../../constants/constants'
import SearchResults from '../SearchResults/SearchResults';




export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSubmit = async(event) => {
    event.preventDefault();
  //   // Make API request with search term
  // const response = await fetch(`https://${API_KEY}/search?q=${searchTerm}`);
  const response = await fetch(`https://7c758111edc7d3eead78199b6daf6f9d/search?q=${searchTerm}`);

  // Parse response data and update search results state
  const data = await response.json();
  setSearchResults(data.results);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input type="text" id="search-input" name="q" className="search-input" placeholder="Search.." value={searchTerm} onChange={handleChange} />
          <button type="submit" className="search-btn"><FaSearch /></button>
        </div>
      </form>
      <SearchResults results={searchResults} />
    </div>
  );
}
