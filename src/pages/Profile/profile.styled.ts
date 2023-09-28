import styled from "styled-components";
export const Content = styled.aside`
  width: 90%;
  max-width: 70rem;
  display: flex;
  margin: 0 auto;

  @media(max-width: 665px){
    flex-direction: column;
  }

`
export const ProfileWrapper = styled.aside`
    flex: 1;
    position: sticky;
    top: 8rem;
    height: fit-content;
    max-width: 31rem;
  
  #profileTab.activeTab{
    height: 20rem;
    justify-content: center;
  }
  
  #adminTab.activeTab{
    height: 14rem;
    justify-content: center;
    padding: 2rem;
    &>div{
      margin-top: 1rem;
    }
  }
`
export const ProfileTab = styled.aside`
  color: white;
  height: calc(2rem + 2rem);
  transition: 400ms;
  overflow: hidden;
  
  h1{
    font-size: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    
    position: relative;
    
    &:before{
      position: absolute;
      content:'';
      height: 5px;
      width: 2rem;
      background: white;
      bottom: 0;
    }
  }
  
  p:nth-child(2n){
    margin-block: 1rem;
  }
  
  button{
    margin-top: 2rem;
  }
`

export const UserPosts = styled.aside`
    display: flex;
    flex-wrap: wrap;
    max-width: 35rem;
    gap: 1rem;
  
  &>div{
    @media(max-width: 665px){
      max-width: 100%;
    }
  }


`
export const SearchPostTab = styled.section`
  padding: 0;
  background: white;
  width: 80%;
  border-radius: 8px;
  margin-top: 1rem;
  transition: 500ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  
  height: 0;
  overflow: hidden;

  @media(max-width: 665px){
    margin-bottom: 2.5rem;
    width: 100%;
  }
  
  input{
    background-color: ${({theme})=> theme.COLORS.NEUTRAL};
    border: none;
    border-radius: 5px;
    outline: none;
    padding: .8rem;
    width: 100%;
  }
  
  h1{
    margin: 0;
    font-size: 2rem;
  }
`



export const FormWrapper = styled.div`
  margin-top: 2rem;
  
    button{
      width: 100%;
    }
  
    button:nth-child(2){
      margin-block: 1rem;
    }

`
