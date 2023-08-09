import React, { useState } from 'react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter your search"
        className="border rounded-l-md focus:ring"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="bg-red-500 text-white rounded-r-md hover:bg-red-600 transition duration-300"
        onClick={handleSearchSubmit}
      >
        Subscribe
      </button>
    </div>
  );
};

export default SearchInput;