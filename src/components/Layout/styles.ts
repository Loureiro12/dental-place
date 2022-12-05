import styled from 'styled-components'

import { LayoutProps } from './index'

const selectColor = (color: string) => {
  if (color === 'primary') return '#2F9687'
  if (color === 'second') return '#FDFDFD'
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
  display: flex;
  flex-direction: row;
  justify-content: ${({ logo }) => (logo ? 'space-around' : 'space-between')};
  padding: 116px 20px;

  svg {
    margin-right: 20px;
  }

  @media screen and (max-width: 700px) {
    display: block;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 50px 10px;

    img {
      margin-top: 40px;
      width: 200px;
      height: 200px;
    }
  }
`
