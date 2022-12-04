import styled from 'styled-components'

import { LayoutProps } from './index'

const selectColor = (color: string) => {
  if (color === 'primary') return '#2F9687'
  if (color === 'second') return 'FDFDFD'
  else return '#F5F5F5'
}

export const Container = styled.div<LayoutProps>`
  justify-content: center;
  background: ${({ backgroundColor }) => selectColor(backgroundColor)};
  width: 100%;
  display: flex;
`
export const Content = styled.div<LayoutProps>`
  width: 1200px;
  background: ${({ backgroundColor }) => selectColor(backgroundColor)};
  margin: 0 30px;
  justify-content: space-between;
  padding: 116px 20px;
`
