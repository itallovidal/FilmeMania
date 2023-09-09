import * as Styles from "./accountConnection.styled.ts";
import poster from "../../assets/poster.png";
import {Outlet} from "react-router-dom";

function AccountConnection() {
    return (
        <Styles.AccountWrapper>
            <section>
                <picture>
                    <img src={poster} alt=""/>
                </picture>

                <Outlet/>
            </section>
        </Styles.AccountWrapper>
    );
}

export default AccountConnection;