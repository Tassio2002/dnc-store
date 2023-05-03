import React from 'react';
import { NavContainer, SearchContainer, SearchIcon, SearchBar } from './styles';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';
import Modal from '../Modal';

export default function NavBar() {
  return (
    <>
      <Modal props={<p>teste</p>} />
      <NavContainer>
        <img src={logo} alt="" />
        <SearchContainer>
          <SearchIcon>
            <img src={searchIcon} alt="search icon" />
          </SearchIcon>
          <SearchBar />
        </SearchContainer>
        <img src={cartIcon} alt="" />
      </NavContainer>
    </>
  );
}
