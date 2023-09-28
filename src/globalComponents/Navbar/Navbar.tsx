import * as Styles from './navbar.styled.ts'
import {defaultTheme} from "../../styles/theme.ts";
import {Link, useLocation} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";
import React from 'react'
import {List, XCircle} from "phosphor-react";
function Navbar() {
    const {user, resetUserData} = React.useContext(GlobalContext)
    const [navbarActive, setNavbarActive] = React.useState(false)
    const {pathname} = useLocation()

    React.useEffect(()=>{
        console.log(pathname)
        console.log(navbarActive)
        if(navbarActive){
            setNavbarActive(false)
        }
    },[pathname])

    return (
        <Styles.NavbarWrapper>
            <Styles.Navbar>
                <div>
                    <Link to={'/'} style={{fontFamily: defaultTheme.FONT.PRIMARY}}>FilmeMania</Link>
                </div>

                <button className={'mobileButton'} onClick={()=> setNavbarActive((prev)=> !prev)}><List size={32}/></button>

                <nav className={navbarActive ? 'active' : ''}>
                    <button className={'mobileButton'} onClick={()=> setNavbarActive((prev)=> !prev)}><XCircle size={32} /></button>
                    <Link to={'/'}> Home </Link>
                    {user ? <Link to={'/profile'}> Perfil </Link> : <Link to={'/account/login'}> Entrar </Link> }
                    {user ? (<button onClick={()=> resetUserData()}> Sair </button>) : <Link to={'/account/signin'}> Criar conta </Link> }
                </nav>
            </Styles.Navbar>
        </Styles.NavbarWrapper>

    );
}

export default Navbar;