import Search from '../Search/search';
import FilterButtons from '../Button/filterButtons';
import PropTypes from 'prop-types';
import '../../styles/_header.sass'
import searchIcon from '../../assets/images/search.png'


const Header = ({ onFilter, onSearch }) => {
  return (
    <header className="header">
      <div className='logo'>
        <span className="brand">Brand</span><span className="ifi">Ifi</span>
      </div>
      <div className='barre'>
        <FilterButtons onFilter={onFilter} />
        <div className='search'>
          <img src={searchIcon} alt="Search Icon" />
          <Search onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;