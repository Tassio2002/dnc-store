import React from 'react';
import { NavBar, Body, SearchBar, SearchContainer, SearchIcon } from './styles';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';

function HomePage() {
  return (
    <Body>
      <NavBar>
        <img src={logo} alt="" />
        <SearchContainer>
          <SearchIcon>
            <img src={searchIcon} alt="search icon" />
          </SearchIcon>
          <SearchBar />
        </SearchContainer>
        <img src={cartIcon} alt="" />
      </NavBar>
    </Body>
  );
}

export default HomePage;
