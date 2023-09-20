import * as Styles from './navbar.styled.ts'
import {defaultTheme} from "../../styles/theme.ts";
import {Link} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";
import React from 'react'
function Navbar() {
    const {user, resetUserData} = React.useContext(GlobalContext)
    return (

        <Styles.NavbarWrapper>
            <Styles.Navbar>
                <picture>
                    <h1 style={{fontFamily: defaultTheme.FONT.PRIMARY}}>FilmeMania</h1>
                </picture>

                <nav>
                    <Link to={'/'}> Home </Link>
                    {user ? <Link to={'/profile'}> Perfil </Link> : <Link to={'/account/login'}> Entrar </Link> }
                    {user ? (<button onClick={()=> resetUserData()}> Sair </button>) : <Link to={'/account/signin'}> Criar conta </Link> }

                </nav>
            </Styles.Navbar>
        </Styles.NavbarWrapper>

    );
}

export default Navbar;