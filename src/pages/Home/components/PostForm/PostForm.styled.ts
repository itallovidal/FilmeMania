import styled from "styled-components";
import {HTMLProps} from "react";
import {show} from "../../../../styles/global.styled.ts";

export const PostWrapper = styled.div`
  background: white;
  display: flex;
  max-width: 70rem;
  width: 90%;
  margin: 0 auto;
  height: 20rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({theme})=> theme.SHADOW};
  border: 2px solid white;

  picture {
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
    overflow: hidden;
    width: 35%;
    height: 100%;
    
    .loaded{
      animation: ${show} 300ms forwards;
    }
    
    img {
      transform: scale(1.2) rotate(-8.5deg);
      height: 100%;
      object-fit: cover;
      opacity: 0;
    }
  }
`

interface IForm extends HTMLProps<HTMLFormElement>{}

export const FormWrapper = styled.form<IForm>`
  padding: 2rem;
  flex: 1;
  justify-content: right;
  display: flex;
  flex-direction: column;
  
  button{
    align-self: flex-end;
  }
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`

export const StarsSection = styled.div`
  width: 40%;
  position: relative;

  .activeSelect{
    padding: .8rem;
    height: 3rem;
  }
  
  #searchButton{
    padding: .8rem;
    margin-bottom: 1rem;
    position: absolute;
    top: calc(2rem + 1ch);
    right: 0;
  }
`

export const CommentSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  

  #comment{
    resize: none;
    width: 100%;
    height: 60%;
    margin-top: 1rem;
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 1rem;
    background: ${({theme})=> theme.COLORS.NEUTRAL};
    margin-bottom: 1rem;
  }

`