import React from 'react';
import { MenuContainer, MenuLink } from './styles';

export default function NavMenu() {
  return (
    <MenuContainer>
      <MenuLink>Novidades</MenuLink>
      <MenuLink>Jogos</MenuLink>
      <MenuLink>Video Games</MenuLink>
      <MenuLink>Mesas Gamer</MenuLink>
      <MenuLink>Promoções</MenuLink>
      <MenuLink>Atendimento</MenuLink>
    </MenuContainer>
  );
}
