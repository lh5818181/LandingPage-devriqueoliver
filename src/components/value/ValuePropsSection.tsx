
import {
  Section,
  Wrapper,
  SectionTitle,
  PropsGrid,
  PropCard,
  PropIcon,
  PropText,
} from './ValuePropsSection.styles';

export function ValuePropsSection() {
  return (
    <Section id="vantagens">
      <Wrapper>
        <SectionTitle>O que você ganha comigo</SectionTitle>
        <PropsGrid>
          <PropCard>
            <PropIcon>💻</PropIcon>
            <PropText>Site Responsivo</PropText>
          </PropCard>
          <PropCard>
            <PropIcon>🚀</PropIcon>
            <PropText>Performance Otimizada</PropText>
          </PropCard>
          <PropCard>
            <PropIcon>🎨</PropIcon>
            <PropText>Design Personalizado</PropText>
          </PropCard>
          <PropCard>
            <PropIcon>⚙️</PropIcon>
            <PropText>Fácil de Gerenciar</PropText>
          </PropCard>
        </PropsGrid>
      </Wrapper>
    </Section>
  );
}
