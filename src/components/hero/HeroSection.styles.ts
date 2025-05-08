// src/components/hero/HeroSection.styles.ts
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(160deg, #0d0d0d 0%, #001f3f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const CTAButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s;
  display: inline-block;

  &:hover {
    background-color: #00a6cc;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }
`;
