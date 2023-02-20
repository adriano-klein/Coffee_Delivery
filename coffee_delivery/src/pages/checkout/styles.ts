import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9rem;
`
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  width: 640px;
  height: 372px;
  border-radius: 6px;
`

export const FormContainer = styled.form`
  padding: 2.5rem;
  background-color: #f3f2f2;
  margin-bottom: 0.75rem;

  span {
    display: flex;
    margin-top: 1rem;
    gap: 0.75rem;

    input {
      margin-top: 0;
    }
  }
`

export const DeliveryHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start !important;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: baseline !important;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #574f4d;
    }
  }
`

export const DeliveryContainer = styled.section`
  div {
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  svg {
    margin-right: 0.5rem;
    color: #c47f17;
  }
`

export const PaymentMethods = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;
    width: 178.67px;
    height: 51px;

    background: #e6e5e5;
    border-radius: 6px;

    flex: none;
    order: 0;
    flex-grow: 1;

    background: #e6e5e5;
    border-radius: 6px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: flex-start !important;
  margin-bottom: 2rem;
  flex-direction: column;
  padding: 2.5rem;
  gap: 32px;

  width: 640px;
  height: 207px;

  background: #f3f2f2;
  border-radius: 6px;

  svg {
    color: #8047f8;
  }
  div {
    display: flex;
  }

  div span > span {
    font-size: 0.87rem;
    font-weight: lighter;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  border-radius: 6px 44px;
  background: #f3f2f2;

  width: 448px;
  height: 498px;
  left: 832px;
  top: 182px;

  img {
    width: 64px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 8px;
  gap: 4px;

  svg {
    padding: 0;
    color: #8047f8;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #e6e5e5;
    border-radius: 6px;
    align-items: center;
    margin-top: 0.5rem;

    padding: 8px;
    gap: 4px;

    width: 72px;
    height: 32px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  svg {
    width: 14px;
  }

  div {
    display: flex;
    gap: 1rem;

    span:nth-child(2) {
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 8px;
      gap: 4px;

      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: lighter;
    }
  }
`
export const RemoveButton = styled.button`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  border: 0;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: lighter;

  background: #e6e5e5;
  border-radius: 6px;
  margin-top: 0.5rem;

  :hover {
    background: #d7d5d5;
    transition: 0.4s;
    cursor: pointer;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 1.5rem;
`
export const Totals = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  font-family: 'Roboto', sans-serif;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span:nth-child(1) {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: #574f4d;
  }

  span:nth-child(2) {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: #574f4d;
  }

  div:nth-child(3) > span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  width: 368px;
  height: 46px;

  background: #dbac2c;
  border-radius: 6px;
  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #ffffff;

  :hover {
    background-color: #c47f17;
    cursor: pointer;
    transition: 0.3s;
  }
`
