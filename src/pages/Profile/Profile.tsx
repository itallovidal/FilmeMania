import * as Styles from './profile.styled.ts';
import Button from "../../globalComponents/Button/Button.tsx";
// import Post from "../../globalComponents/Post/Post.tsx";
import React from "react";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";

function Profile() {
    const [activeTab, setActiveTab] = React.useState(false)
    const {user} = React.useContext(GlobalContext)

    console.log(user)
    return (
        <main>
            <Styles.Content>
                <Styles.ProfileWrapper>
                    <Styles.ProfileTab id={'profileTab'} className={!activeTab ? 'activeTab' : undefined}>
                        <h1>{user!.username}</h1>

                        <p> {user!.fav_gen_1}</p>
                        <p> {user!.fav_gen_2} </p>
                        <p> {user!.fav_gen_3}</p>

                        <Button variant={"neutral"}>Atualizar Perfil</Button>
                    </Styles.ProfileTab>

                    <Styles.AdminTab id={'adminTab'} onClick={()=> setActiveTab(prev => !prev)} className={activeTab ? 'activeTab' : undefined}>
                        <h1>Painel do Moderador</h1>

                        {/*<Input id={'searchUser'} labelName={'Pesquisar usuário'} placeholder={'Pesquise um usuário'}/>*/}

                        <Styles.ButtonWrapper>
                            <Button variant={'neutral'}> Excluir </Button>
                            <Button variant={'neutral'}> Limpar Postagens </Button>
                            <Button variant={'neutral'}> Promover a MOD </Button>
                        </Styles.ButtonWrapper>

                    </Styles.AdminTab>
                </Styles.ProfileWrapper>

                <Styles.UserPosts>
                    {/*<Post/>*/}
                    {/*<Post/>*/}
                    {/*<Post/>*/}
                    {/*<Post/>*/}
                </Styles.UserPosts>
            </Styles.Content>
        </main>
    );
}

export default Profile;