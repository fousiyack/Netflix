import React from 'react';
import './SearchResults.css';

function SearchResults({ results }) {
    return (
      <div className="search-results">
        {results.map((result) => (
          <div key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title} />
          </div>
        ))}
      </div>
    );
  }
  
  export default SearchResults;
