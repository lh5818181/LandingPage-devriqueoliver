import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem 2rem;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 191, 255, 0.15);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grayLight};
  line-height: 1.5;
`;
