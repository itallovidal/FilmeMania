import PostForm from "./components/PostForm/PostForm.tsx";
import Post from "../../globalComponents/Post/Post.tsx";
import * as Styles from './home.styled.ts';
function Home() {
    return (
        <main>
            <PostForm/>

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