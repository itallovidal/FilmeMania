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
 
  @media(min-width: 666px){
    .mobileButton{
      display: none;
    }
  }
  @media (max-width: 665px) {
    button {
      display: initial;
      background: none;
      color: white;
      border: none;
    }

    nav.active{
      right: 0;
      
      box-shadow: -10rem 0 0 rgba(0, 0, 0, 0.67);
    }
    
    nav {
      right: -100%;
      top: 0;
      position: fixed;
      height: 100%;
      width: 80%;
      flex-direction: column;
      display: flex;
      background: white;
      justify-content: center;
      align-items: center;
      z-index: 10;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.67);
      transition: 400ms;


      a, button {
        color: black !important;
        text-align: left;
      }
    }
  }


  h1 {
    margin-block: 1.5rem;
  }

  nav {
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      outline: none;
      color: white;
    }

    a, button {
      padding: 1.1rem 1.5rem;
      position: relative;
      transition: 400ms;

      &:not(:first-child):before {
        content: '';
        width: 2px;
        background: white;
        height: 1rem;
        left: -1px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &:hover {
        background: white;
        color: ${({theme}) => theme.COLORS.SECONDARY};
        border-radius: 8px;
      }
    }
  }
`