import * as Styles from './navbar.styled.ts'
import {defaultTheme} from "../../styles/theme.ts";
import {Link} from "react-router-dom";
function Navbar() {
    return (

        <Styles.NavbarWrapper>
            <Styles.Navbar>
                <picture>
                    <h1 style={{fontFamily: defaultTheme.FONT.PRIMARY}}>FilmeMania</h1>
                </picture>

                <nav>
                    <Link to={'/'}> Home </Link>
                    <Link to={'/profile'}> Perfil </Link>
                    <Link to={'/signOut'}> Sair </Link>
                </nav>
            </Styles.Navbar>
        </Styles.NavbarWrapper>

    );
}

export default Navbar;