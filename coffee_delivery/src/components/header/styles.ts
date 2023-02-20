import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.87rem;
  padding: 1.25rem;

  background-color: #ebe5f9;
  border-radius: 6px;
  height: 38px;
  line-height: 130%;
  color: #4b2995;
  gap: 4px;

  svg {
    color: #8047f8;
    padding: 0;
  }
`

export const ShoppingCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1e9c9;
  border-radius: 6px;
  width: 2.37rem;
  height: 2.37rem;

  svg {
    color: #c47f17;
    padding: 0;
  }
`
