import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  background: #f5f5f5;
  width: 100%;
  display: flex;
`
export const Content = styled.div`
  width: 1200px;
  background: #f5f5f5;
  margin: 0 30px;
  padding: 50px 20px;
`

export const Header = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 44px;
  color: #070707;
  margin-bottom: 10px;

  @media screen and (max-width: 700px) {
    font-size: 1.75rem;
  }
`

export const Caption = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #070707;
`

export const ContainerOption = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 60px;

  @media screen and (max-width: 700px) {
    display: block;
  }
`

export const Option = styled.div`
  text-align: center;

  svg {
    font-size: 5.375rem;
    font-family: 'Inter';
  }

  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 700px) {
    max-width: 253px;
  }
`

export const TitleOption = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 24px;
  color: ${(props) => props.theme.black};
`

export const TextOption = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: ${(props) => props.theme.black};
  margin-top: 10px;
`
