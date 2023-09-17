import PostForm from "./components/PostForm/PostForm.tsx";
import Post from "../../globalComponents/Post/Post.tsx";
import * as Styles from './home.styled.ts';
import React from "react";
import {GlobalContext} from "../../context/GlobalContextProvider.tsx";
function Home() {
    const {user} = React.useContext(GlobalContext)
    return (
        <main>
            {user ? <PostForm/> : null}

            <Styles.PostsWrapper>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Styles.PostsWrapper>
        </main>
    );
}

export default Home;