import styled from "styled-components";


interface IButton{
    variant: 'primary' | 'neutral'
}
const Container = styled.button<IButton>`
  background: ${({variant, theme})=> variant === 'primary' ? theme.COLORS.PRIMARY : theme.COLORS.NEUTRAL};
  padding: 1rem 5rem;
  border: none;
  border-radius: 8px;
  outline: none;
  color: ${({variant, theme})=> variant === 'primary' ? 'white' : theme.COLORS.PRIMARY};
  transition: 400ms;
  
  &:hover{
    transform: translateY(-10px);
    cursor: pointer;
  }
`

interface IButtonProps {
    children: string,
    variant: 'primary' | 'neutral'
}

function Button({variant, children} : IButtonProps) {
    return (
        <Container variant={variant}>{children}</Container>
    );
}

export default Button;