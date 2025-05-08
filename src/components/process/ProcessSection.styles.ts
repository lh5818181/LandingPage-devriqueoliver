// src/components/process/ProcessSection.styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem 2rem;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2.5rem;
`;

export const StepsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

export const StepCard = styled.div`
  grid-column: span 3;
  background: ${({ theme }) => theme.colors.gray};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 191, 255, 0.1);
  transition: transform 0.3s;
  display: flex;
  align-items: flex-start;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const StepIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export const StepInfo = styled.div`
  text-align: left;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
`;

export const StepDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;
`;
