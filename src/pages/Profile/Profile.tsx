import * as Styles from './profile.styled.ts';
import Button from "../../globalComponents/Button/Button.tsx";
import React from "react";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";
import {getAllUserPosts, IPOST} from "../../utils/supabase/getAllPosts.ts";
import Post from "../../globalComponents/Post/Post.tsx";

function Profile() {
    const {user} = React.useContext(GlobalContext)
    const [posts, setPosts] = React.useState<IPOST[]>([])
    const [filter, setFilter] = React.useState<string | null>(null)
    const [activeTab, setActiveTab] = React.useState(false)
    const searchInput = React.useRef<HTMLInputElement>(null)


    function searchUserPost(){
        console.log('entrou na pesquisa')
        if(searchInput.current){
            setFilter(searchInput.current.value)
            console.log('setou o filter')
        }
    }


    React.useEffect(()=>{
        getAllUserPosts(user!.user_id).then((data)=>{
            console.log('fetch nos posts do perfil')
            setPosts(data)
        })
    }, [filter])

    return (
        <main>
            <Styles.Content>
                <Styles.ProfileWrapper>
                    <Styles.ProfileTab id={'profileTab'} className={!activeTab ? 'activeTab' : undefined}>
                        <h1>{user!.username}</h1>

                        <p> {user!.fav_gen_1}</p>
                        <p> {user!.fav_gen_2} </p>
                        <p> {user!.fav_gen_3}</p>

                        <Button onClick={()=>setActiveTab(prev => !prev) } variant={"neutral"}>Pesquisar Filme</Button>

                    </Styles.ProfileTab>

                    <Styles.SearchPostTab id={'adminTab'} className={activeTab ? 'activeTab' : undefined}>

                        <Styles.FormWrapper>
                            <input ref={searchInput} type="text" placeholder={'digite o nome do filme..'}/>
                            <Button onClick={()=> searchUserPost()} variant={'neutral'}> Pesquisar </Button>
                            <Button onClick={()=> {
                                setFilter(null)
                                setActiveTab(prev => !prev)
                            }} variant={'neutral'}> Fechar Filtro </Button>
                        </Styles.FormWrapper>

                    </Styles.SearchPostTab>
                </Styles.ProfileWrapper>
                {/*<Post key={post.id} postData={post}/>*/}
                <Styles.UserPosts>
                    {
                        posts.map(post => {
                            if(filter){
                                return post.movie_title.toLowerCase().includes(filter.toLowerCase()) ? <Post key={post.id} postData={post}/> : null
                            }
                            else {
                                return <Post key={post.id} postData={post}/>
                            }
                        })
                    }
                </Styles.UserPosts>
            </Styles.Content>
        </main>
    );
}

export default Profile;