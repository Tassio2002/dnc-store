import styled from 'styled-components';

const bg = (props) => props.theme.colors.primary;

export const Body = styled.body`
  background-color: ${bg};
`;

export const ProductsSection = styled.section`
  width: 100%;
  padding: 2em 6em;
  display: flex;
  flex-wrap: wrap;
`;
