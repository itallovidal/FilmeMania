import * as Styles from './post.styled';
import StarsRating from "../StarsRating/StarsRating.tsx";
import  post from '../../assets/homearanha.jpg';

function Post() {
    return (
        <Styles.PostWrapper>
            <picture style={{backgroundImage: `url(${post})`}}>
                <img src={post} alt=""/>
            </picture>

            <Styles.DataWrapper>
                <h1>Homem Aranha: De volta ao lar</h1>
                <StarsRating initialValue={3} isChangeable={false}/>
                <Styles.Genres>ação / drama </Styles.Genres>
                <Styles.CommentSection> Eu achei esse filme maneiro até, porém nunca vi ele todo kkk </Styles.CommentSection>

                <Styles.PersonPosted>
                    <p> Itallo Vidal</p>
                    <span> Drama / Suspense / Terror </span>
                </Styles.PersonPosted>
            </Styles.DataWrapper>

        </Styles.PostWrapper>
    );
}

export default Post;