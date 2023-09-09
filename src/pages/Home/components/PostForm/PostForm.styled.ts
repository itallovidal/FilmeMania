import styled from "styled-components";

export const PostWrapper = styled.div`
  background: white;
  display: flex;
  max-width: 70rem;
  width: 90%;
  margin: 0 auto;

  picture {
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
    overflow: hidden;
    width: 55%;
    height: 15rem;

    img {
      transform: scale(1.2) rotate(-8.5deg);
    }
  }
`

export const FormWrapper = styled.form``