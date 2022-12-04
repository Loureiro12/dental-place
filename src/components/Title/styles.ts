import styled from 'styled-components'

import { titleProps } from './index'

export const Container = styled.div<titleProps>`
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 44px;
    color: ${({ textColor }) =>
      textColor === 'primary' ? '#070707' : '#FDFDFD'};
  }
`
