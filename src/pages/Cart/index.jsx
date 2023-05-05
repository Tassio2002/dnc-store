import React from 'react';
import Footer from '../../components/global/Footer';
import NavBar from '../../components/global/NavBar';
import NavMenu from '../../components/global/NavMenu';
import productImage from '../../assets/images/image 21.png';
import {
  MainContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  DescriptionTitle,
  Description,
  InfoContainer,
  InfoProductName,
  ProductPrice,
  ColorContainer,
  ColorName,
  ColorSample,
  ButtonContainer,
  CartButton,
} from './styles';

function MyCart() {
  return (
    <>
      <NavBar />
      <NavMenu />
      <MainContainer>
        <ProductContainer>
          <ProductImage src={productImage} />
          <ProductName>Microsoft Xbox Series X | Preto</ProductName>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <Description>Lorem ipsum, dolor sit amet consectetur</Description>
        </ProductContainer>
        <InfoContainer>
          <InfoProductName>Microsoft Xbox Series X | Preto</InfoProductName>
          <ProductPrice>R$ 2.000,00</ProductPrice>
          <ColorContainer>
            <ColorName>Cor: Preto</ColorName>
            <ColorSample />
          </ColorContainer>
          <ButtonContainer>
            <CartButton>Adicionar ao carrinho</CartButton>
          </ButtonContainer>
        </InfoContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default MyCart;
