import React from 'react';
import {
  Section,
  Wrapper,
  SectionTitle,
  CardsGrid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
} from './ServicesSection.styles';

export function ServicesSection() {
  return (
    <Section id="servicos">
      <Wrapper>
        <SectionTitle>Serviços</SectionTitle>
        <CardsGrid>
          <Card>
            <CardIcon>📱</CardIcon>
            <CardTitle>Site Responsivo</CardTitle>
            <CardDescription>
              Seu site funciona perfeitamente em qualquer dispositivo — celular,
              tablet ou desktop.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>🎨</CardIcon>
            <CardTitle>Design Estratégico</CardTitle>
            <CardDescription>
              Layouts pensados para engajar seu público e reforçar a identidade
              da sua marca.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>🚀</CardIcon>
            <CardTitle>Performance Otimizada</CardTitle>
            <CardDescription>
              Código limpo e otimizado para carregamento rápido e melhor
              experiência do usuário.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>☁️</CardIcon>
            <CardTitle>Deploy &amp; Manutenção</CardTitle>
            <CardDescription>
              Seu site no ar com configuração de domínio, hospedagem e suporte
              contínuo.
            </CardDescription>
          </Card>
        </CardsGrid>
      </Wrapper>
    </Section>
  );
}
