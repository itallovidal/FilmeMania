import PostForm from "./components/PostForm/PostForm.tsx";
import Post from "../../globalComponents/Post/Post.tsx";
import * as Styles from './home.styled.ts';
import React from "react";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";
import {getAllPosts, IPOST} from "../../utils/supabase/getAllPosts.ts";
import {useLocation, useNavigate} from "react-router-dom";
function Home() {
    const {user} = React.useContext(GlobalContext)
    const [posts, setPosts] = React.useState<IPOST[]>([])
    const {search} = useLocation()
    const navigate = useNavigate()

    React.useEffect(()=>{
        if(search === '?newPost'){
            navigate('/')
            return
        }

        getAllPosts().then((data)=>{
            console.log('fetch nos posts')
            setPosts(data)
        })
    }, [search, navigate])

    return (
        <main>
            {user ? <PostForm/> : null}

            <Styles.PostsWrapper>
                {posts.map((post)=> <Post key={post.id} postData={post}/>)}
            </Styles.PostsWrapper>
        </main>
    );
}

export default Home;