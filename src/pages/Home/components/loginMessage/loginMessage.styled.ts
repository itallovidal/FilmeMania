import styled from "styled-components";

export const MessageWrapper = styled.article`
  max-width: 70rem;
  width: 90%;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 6px;
  h1{
    margin-bottom: 1rem;
  }
  p{
    margin-bottom: 1rem;
    a{
      font-style: italic;
      color: ${({theme})=> theme.COLORS.PRIMARY};
    }
  }
`