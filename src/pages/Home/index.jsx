import React from 'react';
import { Body, ProductsSection } from './styles';
import NavBar from '../../components/global/NavBar';
import NavMenu from '../../components/global/NavMenu';
import HeaderImage from '../../components/global/Header';
import ProductCard from '../../components/ProductCard';
import image1 from '../../assets/images/image 21.png';
import image2 from '../../assets/images/image 22.png';
import image3 from '../../assets/images/image 23.png';
import image4 from '../../assets/images/image 24.png';
import image5 from '../../assets/images/image 25.png';
import image6 from '../../assets/images/image 26.png';
import Footer from '../../components/global/Footer';
import Modal from '../../components/global/Modal';
import ProductInCart from '../../components/ProductInCart';

function HomePage() {
  return (
    <Body>
      <Modal
        props={
          <ProductInCart
            title="Microsoft Xbox Series X | Preto"
            price="2.000,00"
            color="preto"
            src={image1}
          />
        }
      />
      <NavBar />
      <NavMenu />
      <HeaderImage />
      <ProductsSection>
        <ProductCard
          image={image1}
          description="Microsoft Xbox Series X | Preto"
        />
        <ProductCard
          image={image2}
          description="Microsoft Xbox Series S | Branco"
        />
        <ProductCard image={image3} description="Nintendo Switch com Jogo" />
        <ProductCard image={image4} description="Jogo God of War Playstation" />
        <ProductCard
          image={image5}
          description="Jogo Uncharted: The Nathan Drake Collection"
        />
        <ProductCard image={image6} description="Jogo Gran Turismo" />
      </ProductsSection>
      <Footer />
    </Body>
  );
}

export default HomePage;
