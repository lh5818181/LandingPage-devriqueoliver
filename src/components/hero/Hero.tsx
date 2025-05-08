// src/components/hero/Hero.tsx
import React from 'react';
import { Container, Content, Title, Subtitle, CTAButton } from './HeroSection.styles';

export function HeroSection() {
  return (
    <Container>
      <Content>
        <Title>Seu site não pode ser só bonito. Ele precisa vender.</Title>
        <Subtitle>
          Crie sua presença digital com um site estratégico, responsivo e com a sua cara.
        </Subtitle>
        <CTAButton href="#vantagens">Quero meu site</CTAButton>
      </Content>
    </Container>
  );
}
