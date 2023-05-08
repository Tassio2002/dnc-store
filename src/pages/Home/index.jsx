import React from 'react';
import { Body, ProductsSection } from './styles';
import NavBar from '../../components/global/NavBar';
import NavMenu from '../../components/global/NavMenu';
import HeaderImage from '../../components/global/Header';
import ProductCard from '../../components/ProductCard';
import image1 from '../../assets/images/image 21.png';
import Footer from '../../components/global/Footer';
import Modal from '../../components/global/Modal';
import ProductInCart from '../../components/ProductInCart';
import { products } from '../../data/products';

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
        {products.map((product) => (
          <ProductCard image={product.image} description={product.name} />
        ))}
      </ProductsSection>
      <Footer />
    </Body>
  );
}

export default HomePage;
