import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.gray};
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
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

export const ContactButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: #00a6cc;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
`;
