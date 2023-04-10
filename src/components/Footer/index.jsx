import React from 'react';
import {
  FooterContainer,
  ContainerLogo,
  ContainerContact,
  ContactText,
} from './styles';
import footerLogo from '../../assets/images/logo-footer.png';

export default function Footer() {
  return (
    <FooterContainer>
      <ContainerLogo>
        <img src={footerLogo} alt="dnc logo" />
      </ContainerLogo>
      <ContainerContact>
        <ContactText>
          Preços e condições de pagamento exclusivos para compras via internet e
          podem variar nas lojas físicas.
          <strong> Para mais informações, </strong>
          entre em contato: (011) 1111-2222
        </ContactText>
      </ContainerContact>
    </FooterContainer>
  );
}
