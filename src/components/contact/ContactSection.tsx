import {
    Section,
    SectionTitle,
    ContactText,
    ContactButton,
    Footer,
    FooterText,
  } from './ContactSection.styles';
  
  export function ContactSection() {
    return (
      <>
        <Section id="contato">
          <SectionTitle>Pronto para transformar sua presença digital?</SectionTitle>
          <ContactText>
            Me envie uma mensagem no Instagram ou clique abaixo para falar direto comigo.  
            Vamos tirar seu site do papel e colocá-lo no ar com estratégia e performance.
          </ContactText>
          <ContactButton
            href="https://instagram.com/devriqueoliver"
            target="_blank"
            rel="noopener noreferrer"
          >
            Me Chamar no Instagram
          </ContactButton>
        </Section>
        <Footer>
          <FooterText>© {new Date().getFullYear()} devriqueoliver. Todos os direitos reservados.</FooterText>
        </Footer>
      </>
    );
  }
  