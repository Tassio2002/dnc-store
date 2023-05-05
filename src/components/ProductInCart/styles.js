import styled from 'styled-components';

export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ProductImage = styled.img`
  width: 25%;
  height: 255px;
`;

export const InfoContainer = styled.div`
  width: 65%;
  padding-bottom: 28px;
  border-bottom: 3px #0c70f2;
  font-weight: 400;
  font-size: 30px;
  color: #2d2d2d;
`;

export const Title = styled.h1`
  font-weight: 700;
  padding-bottom: 10px;
  font-size: 30px;
  color: #0c70f2;
`;

export const ProductName = styled.h2`
  width: 80%;
  padding-bottom: 20px;
  border-bottom: 3px solid #0c70f2;
  margin-bottom: 30px;
  color: #000;
`;

export const Price = styled.p`
  padding-bottom: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  color: #2d2d2d;
`;

export const ColorTag = styled.p`
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #2d2d2d;
`;

export const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 80px;
  border-radius: 10px;
  background: #000000;
`;

export const ContainerBtn = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContinueBtn = styled.button`
  width: 439px;
  padding: 20px 100px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  background-color: #0c70f2;
`;

export const BuyBtn = styled.button`
  width: 439px;
  padding: 20px 100px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  background-color: #676767;
`;
