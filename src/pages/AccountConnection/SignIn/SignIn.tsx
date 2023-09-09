import * as Styles from "../Login/login.styled.ts";
import * as AccountStyles from '../accountConnection.styled.ts'
import Input from "../../../globalComponents/Input/Input.tsx";
import Button from "../../../globalComponents/Button/Button.tsx";
import {Link} from "react-router-dom";

function SignIn() {
    return (
        <AccountStyles.FormWrapper>
            <h1>Cadastramento</h1>

            <form action="">
                <Input labelName={'Nome'} id={'name'} placeholder={'Digite seu nome..'}/>
                <Input labelName={'Senha'} id={'password'} placeholder={'Digite sua senha..'}/>
                <Input isSelect labelName={'Gêneros Favoritos'} id={'favoriteGenres'}/>
                <Button variant={'primary'}>Cadastrar</Button>
            </form>



            <Styles.SignUpWrapper>
                <p>Já possui conta?</p>
                <Link to={'/account/login'}>Cadastre-se</Link>
            </Styles.SignUpWrapper>

        </AccountStyles.FormWrapper>
    );
}

export default SignIn;