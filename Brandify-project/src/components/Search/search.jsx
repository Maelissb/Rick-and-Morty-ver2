import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/_pagination.sass'
import '../../styles/_SearchBar.sass';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);  
  };

  return (
    <div className="search">
      <input
        type="text"
        name="searchBar"
        placeholder="Search"
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;