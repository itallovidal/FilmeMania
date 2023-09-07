import {createGlobalStyle} from "styled-components";



export const GlobalStyled =  createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    body{
      background-color: ${({theme})=> theme.COLORS.PRIMARY};
      font-family: ${({theme})=> theme.FONT.SECONDARY};
    }
`