import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  background: ${(props) => props.theme.green};
  width: 100%;
  display: flex;
`
export const ContentSectionOne = styled.div`
  p {
    max-width: 462px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: ${(props) => props.theme.white};
  }

  p + p {
    margin-top: 5px;
  }
`
