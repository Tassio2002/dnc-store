import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  padding: 8em 12em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #2d2d2d;
`;

export const ProductImage = styled.img`
  width: 100%;
  padding-bottom: 66px;
`;

export const ProductName = styled.span`
  padding-bottom: 66px;
  font-size: 20px;
  font-weight: 400;
`;

export const DescriptionTitle = styled.h2`
  padding-bottom: 31px;
  font-size: 25px;
  font-weight: 600;
`;

export const Description = styled.p`
  padding-bottom: 20px;
  border-bottom: 2px solid #0c70f2;
  font-size: 18px;
  color: #2d2d2d;
`;

export const InfoContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoProductName = styled.h1`
  padding-bottom: 20px;
  border-bottom: 2px solid #0c70f2;
  margin-bottom: 61px;
  font-size: 40px;
  font-weight: 400;
  color: #2d2d2d;
`;

export const ProductPrice = styled.span`
  padding-bottom: 27px;
  font-size: 32px;
  font-weight: 900;
  color: #2d2d2d;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 164px;
`;

export const ColorName = styled.span`
  padding-bottom: 21px;
  font-size: 24px;
  font-weight: 600;
  color: #2d2d2d;
`;

export const ColorSample = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #000;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CartButton = styled.button`
  width: 88%;
  padding: 20px 0;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: #0c70f2;
`;
