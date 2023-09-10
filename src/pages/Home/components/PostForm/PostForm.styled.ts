import styled from "styled-components";
import {HTMLProps} from "react";

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

    img {
      transform: scale(1.2) rotate(-8.5deg);
      height: 100%;
      object-fit: cover;
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

  #comment{
    resize: none;
    width: 100%;
    height: 80%;
    margin-top: 1rem;
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 1rem;
    background: ${({theme})=> theme.COLORS.NEUTRAL};
    margin-bottom: 1rem;
  }

`