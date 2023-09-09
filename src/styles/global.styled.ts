import {createGlobalStyle, keyframes} from "styled-components";

export const show = keyframes`
  100%{
    opacity: 100%;
  }
`
export const GlobalStyled =  createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    body{
      background-color: ${({theme})=> theme.COLORS.SECONDARY};
      font-family: ${({theme})=> theme.FONT.SECONDARY};
    }
    
    a{
      text-decoration: none;
      color: white;
    }
    
    main{
      margin-top: calc(3rem + 1.2ch + 2rem);
      animation: ${show} 400ms forwards;
    }
    
    picture{
      display: block;
      
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    h1{
      font-family: ${({theme})=> theme.FONT.SECONDARY};
    }
`

