import React, { useEffect, useRef, useState } from 'react';

import searchIcon from '../../images/search-icon.svg';
import { Content, Wrapper } from './SearchBar.styles';

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [search, setSearch] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, search]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setSearch(e.currentTarget.value)}
          value={search}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
