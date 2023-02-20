import styled from 'styled-components'

export const CardsContainer = styled.div`
  max-width: 1120px;

  h1 {
    margin-bottom: 3.37rem;
  }
`

export const CardGrid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, auto);
  gap: 2rem;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #f3f2f2;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  img {
    height: 120px;
    width: 120px;
    padding: 0;
    margin-top: -40px;
  }
`

export const DescriptionContainer = styled.section`
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    color: #8d8686;
    font-weight: 400;
    text-align: center;
    margin-top: -8px;
  }
`

export const CategoryContainer = styled.span`
  margin-top: 0.75rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1e9c9;
  width: 81px;
  height: 21px;
  border-radius: 100px;

  p {
    font-family: 'Roboto', sans-serif;
    color: #c47f17;
    font-size: 0.6rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`

export const Price = styled.span`
  display: flex;
  justify-content: center;
  align-items: baseline;

  p {
    font-family: 'baloo 2';
    font-size: 1.5rem;
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
  }
`

export const AmountAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background-color: #e6e5e5;
    border-radius: 6px;
    width: 4.5rem;
    height: 2.37rem;
  }
  svg {
    padding: 0;
  }

  svg:hover {
    cursor: pointer;
  }

  div > svg {
    color: #8047f8;
    width: 0.87rem;
  }
`
export const Cart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4b2995;
  color: white;
  border-radius: 6px;
  height: 38px;
  width: 38px;

  :hover {
    background-color: #8047f8;
    transition: 0.4s;
    cursor: pointer;
  }
`

export const ContentTop = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`
