import * as Styles from './login.styled.ts'
import * as AccountStyles from '../accountConnection.styled.ts'
import Input from "../../../globalComponents/Input/Input.tsx";
import Button from "../../../globalComponents/Button/Button.tsx";
import {Link} from "react-router-dom";
function Login() {
    return (
        <AccountStyles.FormWrapper>
            <h1>FilmeMania</h1>

            <form action="">
                <Input  labelName={'Nome'} id={'name'} placeholder={'Digite seu nome..'}/>
                <Input labelName={'Senha'} id={'password'} placeholder={'Digite sua senha..'}/>
                <Button variant={'primary'}>Entrar</Button>
            </form>

            <Styles.SignUpWrapper>
                <p>Não possui conta?</p>
                <Link to={'/account/signin'}>Entrar </Link>
            </Styles.SignUpWrapper>

        </AccountStyles.FormWrapper>
    );
}

export default Login;