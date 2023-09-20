import PostForm from "./components/PostForm/PostForm.tsx";
import Post from "../../globalComponents/Post/Post.tsx";
import * as Styles from './home.styled.ts';
import React from "react";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";
import {getAllPosts, IPOST} from "../../utils/supabase/getAllPosts.ts";
function Home() {
    const {user} = React.useContext(GlobalContext)
    const [posts, setPosts] = React.useState<IPOST[]>([])

    console.log(posts)

    React.useEffect(()=>{
        getAllPosts().then((data)=>{
            setPosts(data)
        })
    }, [])

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