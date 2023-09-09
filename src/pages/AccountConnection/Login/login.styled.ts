import styled from "styled-components";


export const SignUpWrapper = styled.div`
    padding-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  
      &:before{
        position: absolute;
        content: '';
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 2rem;
        background: ${({theme})=> theme.COLORS.NEUTRAL};
      }
  
    a{
      color: ${({theme})=> theme.COLORS.PRIMARY};
      margin-block: .5rem;
      padding: 1rem;
      position: relative;
      overflow: hidden;
      z-index: 10;
      background: ${({theme})=> theme.COLORS.NEUTRAL};
      border-radius: 8px;
      
      &:before{
        background: ${({theme})=> theme.COLORS.PRIMARY};  
        color: white;
        position: absolute;
        content: '';
        bottom: -200%;
        left: -100%;
        height: 150%;
        width: 200%;
        transition: 800ms;
        z-index: -1;
        transform: rotate(45deg);
      }
      
      &:hover:before{
        bottom: 200%;
        border-radius: 8px;
        left: 60%;
        
      }
      
      //&:hover{
      //  color: white;
      //  transition: 200ms 300ms;
      //}
    }
`