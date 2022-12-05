import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  background: ${(props) => props.theme.green};
  width: 100%;
  display: flex;
`
export const ContentSectionOne = styled.div`
  width: 100%;
`
export const ContentImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  @media screen and (max-width: 700px) {
    justify-content: center;
    display: grid;
    grid-template-columns: 6.25rem 6.25rem;
    margin: 0 auto;

    img {
      width: 90px;
      height: 90px;
    }
  }
`
