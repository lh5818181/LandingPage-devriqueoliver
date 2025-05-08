import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Tabs,
  TabItem,
  CTAButton,
} from './Hero.styles';

export function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitle>Seu site não pode ser só bonito. Ele precisa vender.</HeroTitle>
        <HeroSubtitle>
          Transformo ideias em experiências digitais com estratégia, estética e
          performance.
        </HeroSubtitle>
        <Tabs>
          <TabItem active>Serviços</TabItem>
          <TabItem>Portfólio</TabItem>
          <TabItem>Como Funciona</TabItem>
        </Tabs>
        <CTAButton href="#servicos">Quero meu site →</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
}
