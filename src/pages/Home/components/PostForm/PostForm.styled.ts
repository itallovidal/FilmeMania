import styled from "styled-components";
import {HTMLProps} from "react";
import {show} from "../../../../styles/global.styled.ts";

export const PostWrapper = styled.div`
  //background: white;
  display: flex;
  max-width: 70rem;
  width: 90%;
  margin: 0 auto;
  height: 20rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({theme}) => theme.SHADOW};
  border: 2px solid white;
  position: relative;
  background-size: cover;
  background-position: center;

  @media (max-width: 980px){
    flex-direction: column;
    height: 30rem;
    background-image: none !important;
    background: white;
  }
  
  @media(min-width: 981px){
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: .6;
    }  
    &>*{
         z-index: 2;
         color: white;
       }
  }

  @media (max-width: 665px){
    height: auto;
  }
  

  picture {
    @media(max-width: 980px){
      width: 100%;
      background: blue;
      clip-path: none;
      max-width: 100%;
    }

    @media (max-width: 665px){
      max-height: 10rem;
    }
    
    z-index: 2;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
    overflow: hidden;
    width: 55%;
    height: 100%;
    max-width: 20rem;

    .loaded {
      animation: ${show} 300ms forwards;
    }

    img {
      @media(max-width: 980px){
        transform: none;
      }
      
      transform: scale(1.2) rotate(-8.5deg);
      height: 100%;
      object-fit: cover;
      opacity: 0;
    }
  }
  
`

interface IForm extends HTMLProps<HTMLFormElement>{}

export const FormWrapper = styled.form<IForm>`
  @media (min-width: 981px){
    padding-left: 0;
  }
  
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

  @media (max-width: 665px){
    flex-direction: column;
    
    &>div{
      width: 100%;
    }
  }
`

export const SearchWrapper = styled.div`

  margin-bottom: 1rem;

  &>div{
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    outline: none;
  }

  input{
    background-color: ${({theme})=> theme.COLORS.NEUTRAL};
    padding: 1rem;
    width: 100%;
    border: none;
      //border: 1px solid ${({theme})=> theme.COLORS.PRIMARY};;
  }

  #searchButton{
    padding: 1rem;
    border-radius: 5px;
    //margin-bottom: 1rem;
    position: absolute;
    right: -1%;
    top: 0;
    color: black;
    //transform: translateY(calc(50%));
    z-index: 100;
    background: ${({theme})=> theme.COLORS.STARS_COLOR}
  }
`
export const StarsSection = styled.div`
  width: 60%;
  position: relative;
  
  
  span{
    opacity: 0;
    color: red ;
  }
  
  span.error{
    animation: ${show} 400ms forwards;
  } 
  
  .activeSelect{
    padding: .8rem;
    height: 3rem;
  }
`

export const CommentSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  min-width: 13.125rem;  

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