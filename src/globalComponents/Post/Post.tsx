import * as Styles from './post.styled';
import StarsRating from "../StarsRating/StarsRating.tsx";
import {IPOST} from "../../utils/supabase/getAllPosts.ts";
import React from "react";
import {getUserFavoriteGenres} from "../../utils/supabase/getUserFavoriteGenres.ts";
import {getUserName} from "../../utils/supabase/getUserName.ts";
import {getMovie, IMAGE_PATH} from "../../utils/api.ts";

interface PostProps{
    postData: IPOST,
    filter?: string
}

interface IPostInfo{
    username: string,
    genre_1: string,
    genre_2: string,
    genre_3: string,
    genres: string[],
    poster: string,
    title: string,
    rating: number,
}
function Post({postData} : PostProps) {
    const [post, setPost] = React.useState<IPostInfo | null>(null)

    React.useEffect(()=>{
        async function getPostData(){
            const responseUserGenre= await getUserFavoriteGenres(postData.fk_user_id)
            const {username} = await getUserName(postData.fk_user_id)
            const responseMovie = await getMovie(postData.movie_id)

            setPost({
                ...responseMovie,
                username: username,
                genre_1: responseUserGenre[0].genres.name,
                genre_2: responseUserGenre[1].genres.name,
                genre_3: responseUserGenre[2].genres.name,
                rating: postData.rating
            })
        }

        getPostData()

    },[postData])

    if(!post){
        return null
    }


    return (<Styles.PostWrapper>
            <picture style={{backgroundImage: `url(${IMAGE_PATH + post.poster})`}}>
                <img src={IMAGE_PATH+ post.poster} alt=""/>
            </picture>

            <Styles.DataWrapper>
                <h1>{post.title}</h1>
                <StarsRating initialValue={post.rating} isChangeable={false}/>
                <Styles.Genres><span>{post.genres[0]}</span><span>{post.genres[1]}</span></Styles.Genres>
                <Styles.CommentSection> {postData.comment} </Styles.CommentSection>

                <Styles.PersonPosted>
                    <span> {post.username} </span>
                    <p> {post.genre_1} | {post.genre_2} | {post.genre_3} </p>
                </Styles.PersonPosted>
            </Styles.DataWrapper>

        </Styles.PostWrapper>)
}

export default Post;