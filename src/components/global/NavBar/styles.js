import styled from 'styled-components';

const bg = (props) => props.theme.colors.primary;

export const NavContainer = styled.nav`
  width: 100%;
  padding: 1em 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${bg};
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 970px;
  height: 48px;
  display: flex;
`;

export const SearchIcon = styled.div`
  width: 5%;
  display: flex;
  padding-left: 15px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: white;
`;

export const SearchBar = styled.input.attrs({
  type: 'text',
  placeholder: 'O que você está procurando?',
})`
  width: 95%;
  border: none;
  padding: 0.5em;
  background-color: white;
  color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const MyCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
