import styled from "styled-components";


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;
  width: 100%;

  label{
    margin-bottom: 1rem;
  }
  

  
  input, select{
    padding: 1rem 1.5rem;
    background: ${({theme})=> theme.COLORS.NEUTRAL};
    border: none;
    border-radius: 8px;
    outline: none;
    width: 100%;
  }

  select{
    padding: 1rem 1rem;
    cursor: pointer;
    
    option{
      padding: 1rem 1rem;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }
  
  span{
    margin-block: 1rem;
    height: 0;
    color: red;
    opacity: 0;
    transition: 400ms;
    margin: 0;
  }
  
  .errorActive{
    height: 1ch;
    opacity: 1;
    margin-block: 1rem;
  }
  
`

export const SelectWrapper = styled.div`
  display: flex;
  gap: .5rem;
`