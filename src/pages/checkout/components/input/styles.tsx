import styled from 'styled-components'

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  background-color: #eeeded;

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  width: 560px;
  height: 42px;

  + input {
    margin-top: 16px;
  }

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.87rem;

    color: #8d8686;
  }
`
