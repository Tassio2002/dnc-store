import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductName,
  FlexContainer,
  ProductImage,
  Price,
  InfoContainer,
  Title,
  ColorBox,
  ColorTag,
  ContainerBtn,
  ContinueBtn,
  BuyBtn,
} from './styles';

export default function ProductInCart({ title, price, color, src }) {
  return (
    <FlexContainer>
      <ProductImage src={src} />
      <InfoContainer>
        <Title>Meu Carrinho</Title>
        <ProductName>{title}</ProductName>
        <Price>{`R$ ${price}`}</Price>
        <ColorTag>{`Cor: ${color}`}</ColorTag>
        <ColorBox />
        <ContainerBtn>
          <ContinueBtn>Continuar Comprando</ContinueBtn>
          <BuyBtn>Finalizar Compra</BuyBtn>
        </ContainerBtn>
      </InfoContainer>
    </FlexContainer>
  );
}

// prop validation
ProductInCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
