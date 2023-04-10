import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 33%;
  margin-bottom: 2em;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 330px;
  padding-bottom: 0.5em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Description = styled.p`
  padding: 1em 0;
  font-weight: 400;
  font-size: 14px;
  color: #252423;
`;

export const Button = styled.button`
  padding: 0.5em 3em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 1.2em;
  font-weight: 700;
  font-size: 14px;
  background: #0c70f2;
  color: #fff;

  &:hover {
    background: #0c7;
  }
`;
