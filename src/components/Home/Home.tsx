import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResult/SearchResults';
import './Home.css';
function Home() {
  return (
    <div className='home'>
      <Header />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default Home;
