// src/components/SectionDivider.tsx
import styled from 'styled-components';

export const DiagonalDivider = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray};
  clip-path: polygon(0 0, 100% 100%, 0 100%);
`;
