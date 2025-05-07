import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
`;

export const PropsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;

export const PropCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 191, 255, 0.15);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PropIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PropText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;
