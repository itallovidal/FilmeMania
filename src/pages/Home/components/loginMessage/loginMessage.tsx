import * as Styles from './loginMessage.styled.ts'
import {Link} from "react-router-dom";

function LoginMessage() {
    return (
        <Styles.MessageWrapper>
            <h1>Bem Vindo ao FilmeMania!</h1>
            <p>Faça o <Link to={'/account/login'}>login</Link> para poder fazer suas postagens!</p>
            <p> Ou você pode <Link to={'/account/signin'}>criar sua conta</Link> para se juntar à nos!</p>
        </Styles.MessageWrapper>
    );
}

export default LoginMessage;