import React, { useContext } from 'react';
import { BookingContext } from '../../App';
import buses from '../../fakeData/buses.json';
import SearchResult from './SearchResult';

const SearchResults: React.FC = () => {
  const { searchQuery } = useContext(BookingContext);

  return (
    <div className='search-results py-5'>
      <div className='container'>
        {searchQuery &&
          searchQuery.from &&
          searchQuery.to &&
          buses.map((bus) => <SearchResult key={bus.id} bus={bus} />)}
      </div>
    </div>
  );
};

export default SearchResults;
