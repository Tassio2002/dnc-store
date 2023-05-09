import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/global/Footer';
import NavBar from '../../components/global/NavBar';
import NavMenu from '../../components/global/NavMenu';
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
import { products } from '../../data/products';

function MyCart() {
  const params = useParams();
  const currentProduct = products[params.id];
  return (
    <>
      <NavBar />
      <NavMenu />
      <MainContainer>
        <ProductContainer>
          <ProductImage src={currentProduct.image} />
          <ProductName>{currentProduct.name}</ProductName>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <Description>{currentProduct.description}</Description>
        </ProductContainer>
        <InfoContainer>
          <InfoProductName>{currentProduct.name}</InfoProductName>
          <ProductPrice>{`R$ ${currentProduct.price},00`}</ProductPrice>
          <ColorContainer>
            <ColorName>{`Cor: ${currentProduct.color}`}</ColorName>
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
