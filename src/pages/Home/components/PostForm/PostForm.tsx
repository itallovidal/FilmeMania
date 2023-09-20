import * as Styles from './PostForm.styled.ts'
import Button from "../../../../globalComponents/Button/Button.tsx";
import poster from "../../../../assets/poster.png"
import StarsRating from "../../../../globalComponents/StarsRating/StarsRating.tsx";
import {MagnifyingGlass} from "phosphor-react";
import {IMAGE_PATH, IMovie, searchMovie} from "../../../../utils/api.ts";
import SearchResult from "../SeachResult/SeachResult.tsx";
import React, {FormEvent} from "react";
import {GlobalContext} from "../../../../context/GlobalContextProvider.tsx";
import {postRating} from "../../../../utils/supabase/postRating.ts";

const typeOptions = {
    SEARCH_MOVIE: 'SEARCH_MOVIE',
    SELECT_MOVIE: 'SELECT_MOVIE',
    STAR_RATE: 'STAR_RATE',
    SET_MOVIE_LIST: 'SET_MOVIE_LIST',
    SET_ERROR: 'SET_ERROR',
    RESET : 'RESET'
} as const

interface IACTION {
    type: keyof typeof typeOptions,
    payload?: any
}

interface IPostHandler {
    movies: IMovie[],
    query: null | string,
    selectedMovie: IMovie | null,
    star_rate: number,
    error: null
}

function PostForm() {
    const imageBackdrop = React.useRef<HTMLImageElement>(null)
    const {user} = React.useContext(GlobalContext)
    const [postHandler, postDispatch] = React.useReducer((state: IPostHandler, action: IACTION)=>{
        if(action.type === "SEARCH_MOVIE"){
            return {...state, query: action.payload}
        }

        if(action.type === "SELECT_MOVIE"){
            if(imageBackdrop.current){
                imageBackdrop.current.classList.remove('loaded');
            }

            const selected = state.movies.filter((item)=>{
                return item.id === action.payload
            })[0]

            return {...state, selectedMovie: selected}

        }

        if(action.type === "STAR_RATE"){
            return {...state, star_rate: action.payload}
        }

        if(action.type === "SET_MOVIE_LIST"){
            return {...state, movies: action.payload}
        }

        if(action.type === "SET_ERROR"){
            return {...state, error: action.payload}
        }

        if(action.type === 'RESET'){
            return {
                movies: [],
                query: null,
                selectedMovie: null,
                star_rate: 1,
                error: null
            }
        }

        return state
    }, {
        movies: [],
        query: null,
        selectedMovie: null,
        star_rate: 1,
        error: null
    })

    async function submitPost(e: FormEvent){
        e.preventDefault()

        if(postHandler.selectedMovie === null){
            console.log('erro com selecao do filme')
            postDispatch({
                type: "SET_ERROR",
                payload: "Sem filmes selecionados."
            })

            return
        }
        postDispatch({
            type: "SET_ERROR",
            payload: null
        })


        const comment = document.querySelector<HTMLInputElement>('#comment')!.value
        const postResponse  = await postRating(user!.user_id, postHandler.selectedMovie.id, postHandler.star_rate, comment )

        if(postResponse){
            postDispatch({
                type: "RESET",
            })
            document.querySelector<HTMLInputElement>('#comment')!.value = ''
        }
    }

    function handleSetStar(value: number){
        postDispatch({
            type: 'STAR_RATE',
            payload: value
        })
    }
    function handleSelect(value: number){
        console.log(value)
        postDispatch({
            type: 'SELECT_MOVIE',
            payload: value
        })
    }
    function handleSearch(){
        const input = document.querySelector<HTMLInputElement>('#movieName')

        if(input){
            const movieToSearch = input.value

            if(movieToSearch.length > 3) {
                postDispatch({
                    type: "SEARCH_MOVIE",
                    payload: movieToSearch
                })

                input.value = ''
            }
        }
    }
    function loadImage(){
        if(imageBackdrop.current){
            imageBackdrop.current.classList.add('loaded');
        }
    }


    React.useEffect(()=>{
        if(postHandler.query !== null){
            searchMovie(postHandler.query).then((data)=>{
                postDispatch({
                    type: "SET_MOVIE_LIST",
                    payload: data
                })
            })
        }
    }, [postHandler.query])

    let posterImage = poster;

    if(postHandler.selectedMovie && postHandler.selectedMovie.backdrop_path !== null){
        posterImage =  IMAGE_PATH + postHandler.selectedMovie.backdrop_path
    }


    return (
        <Styles.PostWrapper>
            <picture>
                <img
                    ref={imageBackdrop}
                    onLoad={()=> loadImage()}
                    src={posterImage}
                    alt=""/>
            </picture>

            <Styles.FormWrapper onSubmit={(e)=> submitPost(e)}>
                <Styles.Wrapper>
                    <Styles.StarsSection>

                        <Styles.SearchWrapper>
                            <label htmlFor="">Selecione o filme e a avaliação</label>

                            <input id={'movieName'} type="text" placeholder={'Procure pelo filme.'}/>
                            
                            <Button
                                onClick={()=> handleSearch()}
                                type={'button'}
                                id={'searchButton'}
                                variant={"neutral"}><MagnifyingGlass size={16} /></Button>
                        </Styles.SearchWrapper>

                        <SearchResult
                            handleSelect={handleSelect}
                            movies={postHandler.movies}/>

                        <StarsRating
                            handleSetStar={handleSetStar}
                            initialValue={postHandler.star_rate}
                            isChangeable={true}/>

                        <span className={postHandler.error && 'error'} >{postHandler.error}</span>
                    </Styles.StarsSection>

                    <Styles.CommentSection>
                        <label htmlFor="comment">Comentário</label>
                        <textarea
                            placeholder={'Digite um comentário breve (opcional)'}
                            rows={5}
                            maxLength={250}
                            id={'comment'}
                            name={'comment'}/>

                        <Button type={'submit'} variant={'primary'}>Postar</Button>
                    </Styles.CommentSection>
                </Styles.Wrapper>
            </Styles.FormWrapper>
        </Styles.PostWrapper>
    );
}

export default PostForm;