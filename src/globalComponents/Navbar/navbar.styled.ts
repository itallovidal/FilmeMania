import styled from "styled-components";

export const NavbarWrapper = styled.div`
  top: 0;
  background: ${({theme})=> theme.COLORS.DARK_GRADIENT};
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 10;
  
`

export const Navbar = styled.div`
  padding-inline: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
  color: white;
  
  
  h1{
    margin-block: 1.5rem;
  }
  
  nav{
    button{
      cursor: pointer;
      border: none;
      background-color: transparent;
      outline: none;
      color: white;
    }
    a, button{
      padding: 1.1rem 1.5rem;
      position: relative;
      transition: 400ms;
      
      &:not(:first-child):before{
        content: '';
        width: 2px;
        background: white;
        height: 1rem;
        left: -1px;
        position: absolute; 
        top: 50%;
        transform: translateY(-50%);
      }
      
      &:hover{
        background: white;
        color: ${({theme})=> theme.COLORS.SECONDARY};
        border-radius: 8px;
      }
    }
  }
`