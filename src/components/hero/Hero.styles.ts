import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(
    160deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

export const HeroContent = styled.div`
  max-width: 700px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const Tabs = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2.5rem;
`;

interface TabItemProps {
  active?: boolean;
}

export const TabItem = styled.div<TabItemProps>`
  padding: 0.75rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  color: ${({ theme, active }) =>
    active ? theme.colors.background : theme.colors.white};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }
`;
