import styled from "styled-components";
import {show} from "../../styles/global.styled.ts";

export const AccountWrapper = styled.article`
  max-width: 70rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  height: 100svh;
  align-items: center;
  padding-top: calc(3rem + 1.2ch + 2rem);
  
  section{
    display: flex;
    height: 45rem;
    background: white;
    width: 90%;
    max-width: 70rem;
    
    picture {
      clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
      overflow: hidden;
      width: 55%;

      img {
        transform: scale(1.2) rotate(-8.5deg);
      }
    }
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  opacity: 0;
  animation: ${show} 400ms forwards;
  margin-left: -5%;
  
  button{
    margin: 2rem auto;
    
  }
  
  form{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`

