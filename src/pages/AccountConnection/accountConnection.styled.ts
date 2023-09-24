import styled from "styled-components";
import {show} from "../../styles/global.styled.ts";

export const AccountWrapper = styled.main`
  //max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  height: 100svh;
  align-items: center;
  padding-top: calc(3rem + 1.2ch + 2rem);

  @media(max-width: 665px){
    height: auto;
  }
  
  section{
    display: flex;
    background: white;
    width: 100%;
    //max-width: 70rem;
    height: 100%;
    
    @media(max-width: 665px){
      flex-direction: column;
    }
    
    picture {
      clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
      overflow: hidden;
      width: 55%;
      
      @media(max-width: 665px){
        width: 100%;
        clip-path: none;
        max-height: 10rem;
      }
      
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
  //flex: 1;
  width: 30%;
  margin: 0 auto;
  opacity: 0;
  animation: ${show} 400ms forwards;
  //margin-left: -5%;

  @media(max-width: 665px){
    padding: 2rem;
    width: 100%;
    
    h1{
      margin-bottom: 1rem;
    }
  }
  
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

