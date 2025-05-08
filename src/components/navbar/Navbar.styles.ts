import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-family: 'Anton', sans-serif;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; /* esconde em mobile, se desejar */
  }
`;

export const NavLinkItem = styled.a`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavButton = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }
`;
