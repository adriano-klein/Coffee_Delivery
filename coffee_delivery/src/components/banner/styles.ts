import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  margin-top: 85px;
  justify-content: space-between;
  margin-bottom: 6.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: #272221;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: #403937;
    margin-bottom: 4rem;
    line-height: 130%;
    font-weight: 400;
  }

  img {
    width: 476px;
    height: 360px;
  }
`
export const MainText = styled.div`
  max-width: 588px;
`

export const Bullets = styled.div`
  section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  font: 'Roboto', sans-serif;
  gap: 1.25rem;

  svg {
    background-color: #c47f17;
    color: white;
    padding: 8px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`
