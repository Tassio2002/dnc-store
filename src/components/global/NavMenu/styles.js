import styled from 'styled-components';

const bg = (props) => props.theme.colors.primary;

export const MenuContainer = styled.div`
  width: 100%;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  background-color: ${bg};
`;

export const MenuLink = styled.a`
  font-weight: 600;
  font-size: 30px;
  &:hover {
    font-weight: 900;
  }
`;
