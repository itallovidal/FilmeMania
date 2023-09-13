import styled from "styled-components";
export const Content = styled.aside`
  width: 90%;
  max-width: 70rem;
  display: flex;
  margin: 0 auto;

`
export const ProfileWrapper = styled.aside`
    flex: 1;
    position: sticky;
    top: 8rem;
    height: fit-content;
  
  #profileTab.activeTab{
    height: 20rem;
    justify-content: center;
  }
  
  #adminTab.activeTab{
    height: 31.25rem;
    justify-content: center;
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
`
export const AdminTab = styled.section`
  padding: 2rem;
  background: white;
  width: 80%;
  border-radius: 8px;
  margin-top: 1rem;
  transition: 500ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  
  height: calc(2rem + 2rem + 1.9rem);
  overflow: hidden;
  
  h1{
    margin: 0;
    font-size: 2rem;
  }
`



export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  
    button{
      width: 100%;
    }
  
    button:nth-child(2){
      margin-block: 1rem;
    }

`
