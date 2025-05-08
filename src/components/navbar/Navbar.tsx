import React from 'react';
import {
  NavContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  NavButton,
} from './Navbar.styles';

export function Navbar() {
  return (
    <NavContainer>
      <Logo>devriqueoliver</Logo>
      <NavLinks>
        <NavLinkItem href="#home">Home</NavLinkItem>
        <NavLinkItem href="#servicos">Serviços</NavLinkItem>
        <NavLinkItem href="#portfolio">Portfólio</NavLinkItem>
        <NavLinkItem href="#contato">Contato</NavLinkItem>
      </NavLinks>
      <NavButton
        href="https://instagram.com/devriqueoliver"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram →
      </NavButton>
    </NavContainer>
  );
}
