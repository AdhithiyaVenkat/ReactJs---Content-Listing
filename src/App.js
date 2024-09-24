import React, { useState } from 'react';
import MovieGrid from './components/MovieGrid';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm(''); // Clear the search term when closing the search bar
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="back-button">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>Romantic Comedy</h1>
        <button className="search-button" onClick={handleSearchClick}>
          <i className="fas fa-search"></i>
        </button>
      </header>
      {showSearch && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
      )}
      <MovieGrid searchTerm={searchTerm} />
    </div>
  );
};

export default App;
