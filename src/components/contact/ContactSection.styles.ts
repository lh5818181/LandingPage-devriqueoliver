// src/components/contact/ContactSection.styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 4rem 2rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const ContactText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.5;
`;

export const ContactButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s;
  display: inline-block;

  &:hover {
    background-color: #00a6cc;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem 2rem;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
`;
