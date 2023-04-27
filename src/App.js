import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action}from './urls';
import SearchBar from './Components/SearchBar/SearchBar';
import {imageUrl,API_KEY}from './constants/constants';
import axios from './Components/axios'
import SearchResults from './Components/SearchResults/SearchResults';
import Footer from './Components/Footer/Footer';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (searchTerm) => {
    axios.get(`/search/multi?api_key=${API_KEY}&query=${searchTerm}`).then((response) => {
      setSearchResults(response.data.results);
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <div className="App">
 <Navbar/>  
 <Banner/>
 <RowPost url={originals} title='Netfix Originals'/>
 <RowPost  url={action}title='Action' isSmall/>
 <SearchBar onSubmit={handleSearch} />
 <SearchResults results={searchResults} />
 <Footer/>
 
    </div>
  );
}

export default App;
