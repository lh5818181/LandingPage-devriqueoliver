// src/components/process/ProcessSection.tsx
import React from 'react';
import {
  Section,
  Wrapper,
  SectionTitle,
  StepsGrid,
  StepCard,
  StepIcon,
  StepInfo,
  StepTitle,
  StepDescription,
} from './ProcessSection.styles';

export function ProcessSection() {
  return (
    <Section id="processo">
      <Wrapper>
        <SectionTitle>Como eu trabalho</SectionTitle>
        <StepsGrid>
          <StepCard>
            <StepIcon>🔍</StepIcon>
            <StepInfo>
              <StepTitle>1. Descoberta</StepTitle>
              <StepDescription>
                Conversamos sobre seu negócio, público e objetivos para definir escopo.
              </StepDescription>
            </StepInfo>
          </StepCard>
          <StepCard>
            <StepIcon>🎨</StepIcon>
            <StepInfo>
              <StepTitle>2. Design</StepTitle>
              <StepDescription>
                Crio layouts e protótipos no Figma, validando identidade visual e usabilidade.
              </StepDescription>
            </StepInfo>
          </StepCard>
          <StepCard>
            <StepIcon>💻</StepIcon>
            <StepInfo>
              <StepTitle>3. Desenvolvimento</StepTitle>
              <StepDescription>
                Converto o design em código React/TS, sempre otimizado e responsivo.
              </StepDescription>
            </StepInfo>
          </StepCard>
          <StepCard>
            <StepIcon>🚀</StepIcon>
            <StepInfo>
              <StepTitle>4. Entrega</StepTitle>
              <StepDescription>
                Publico seu site em produção, configuro domínio e garanto performance.
              </StepDescription>
            </StepInfo>
          </StepCard>
        </StepsGrid>
      </Wrapper>
    </Section>
  );
}
