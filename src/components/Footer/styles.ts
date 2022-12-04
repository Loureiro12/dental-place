import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.green};
  text-align: center;
  padding: 1.25rem;

  h1 {
    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: 1rem;
  }
`
