import styled from "styled-components";

export const PostWrapper = styled.div`
  max-width: calc(35rem - .5rem);
  width: 100%;
  background: white;
  display: flex;
  height: 21rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({theme})=> theme.SHADOW};
  border: 2px solid white;
  
  picture{
    width: 100%;
    max-width: 15rem ;
    overflow: hidden;
    
    img{
      scale: 1;
      object-fit: cover;
      object-position: center;
    }
  }
`
export const DataWrapper = styled.div`
  width: 55%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  
  h1{
    font-size: 1.5rem;
    margin-block: 0;
  }
  
  #starsWrapper{
    margin-top: -10px;
    //margin-bottom: .5rem;
  }
`
export const Genres = styled.p`
  margin-bottom: 1rem;
`
export const CommentSection = styled.p`
  //height: 8ch;
  overflow: scroll;
  margin-bottom: 1rem;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  flex: 1;
  
  &::-webkit-scrollbar{
    display: none;
  }
`

export const PersonPosted = styled.div`
  p{
    font-weight: bold;
  }
  
  span{
    opacity: .7;
  }
`