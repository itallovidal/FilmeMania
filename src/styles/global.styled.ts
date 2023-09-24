import {createGlobalStyle, keyframes} from "styled-components";

export const show = keyframes`
  100%{
    opacity: 1;
  }
`
export const GlobalStyled =  createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    body{
      background-image: ${({theme})=> theme.COLORS.GRADIENT};
    }
    
    span, p, a, textarea, input, label, select, option, button{
      font-family: ${({theme})=> theme.FONT.PRIMARY} !important;
    }
    
    a{
      text-decoration: none;
      color: white;
    }
    
    main{
      min-height: 100vh;
      margin-top: calc(4rem + 1.2ch + 2rem);
      animation: ${show} 400ms forwards;
      margin-bottom: calc(4rem + 2rem);
      opacity: 0;
      animation: ${show} 400ms 200ms forwards;
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

