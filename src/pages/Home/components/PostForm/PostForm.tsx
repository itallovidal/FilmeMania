import * as Styles from './PostForm.styled.ts'
import Input from "../../../../globalComponents/Input/Input.tsx";
import Button from "../../../../globalComponents/Button/Button.tsx";
import poster from "../../../../assets/poster.png"
import StarsRating from "../../../../globalComponents/StarsRating/StarsRating.tsx";
import {MagnifyingGlass} from "phosphor-react";
import {IMAGE_PATH, IMovie, searchMovie} from "../../../../utils/api.ts";
import SearchResult from "../SeachResult/SeachResult.tsx";
import React from "react";
import { useForm } from "react-hook-form"

function PostForm() {
    const [isSelectActive, setIsSelectActive] = React.useState(false);
    const [movieSearched, setMovieSearched] = React.useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = React.useState<IMovie | null>(null);
    const [starRating, setStarRating] = React.useState(0);
    const { handleSubmit } = useForm()

    const imageBackdrop = React.useRef<HTMLImageElement>(null)

    function handleSetStar(rating: number){
        setStarRating(rating)
    }
    function handlePost(){
        setIsSelectActive(false)
        console.log(starRating)
        console.log('enviou formulario')
    }
    function handleSelect(movieId: number  ){
        console.log('selectionado')
        if(imageBackdrop.current){
            imageBackdrop.current.classList.remove('loaded');
        }
        setSelectedMovie(movieSearched.filter((item)=>{
            return item.id === movieId
        })[0])
    }

    function handleSearchMovie(){
        const movieToSearch = document.querySelector<HTMLInputElement>('#movieName')
        console.log('clicado na lupa')
        if(movieToSearch){
            searchMovie(movieToSearch.value).then((data)=>{
                setMovieSearched(data)
                console.log(data);
                setIsSelectActive(true)
            })
        }
    }

    function loadImage(){
        if(imageBackdrop.current){
            imageBackdrop.current.classList.add('loaded');
        }
    }

    return (
        <Styles.PostWrapper>
            <picture>
                <img ref={imageBackdrop} onLoad={()=> loadImage()} src={selectedMovie && selectedMovie.backdrop_path !== null ? IMAGE_PATH + selectedMovie.backdrop_path : poster} alt=""/>
            </picture>

            <Styles.FormWrapper onSubmit={handleSubmit(handlePost)}>
                <Styles.Wrapper>
                    <Styles.StarsSection>
                        <Input labelName={'Nome do Filme'} id={'movieName'} name={'movieName'} />
                        <Button type={'button'} onClick={()=> handleSearchMovie()} id={'searchButton'} variant={"neutral"}><MagnifyingGlass size={16} /></Button>

                        <SearchResult handleSelect={handleSelect} isActive={isSelectActive} movies={movieSearched}/>
                        <StarsRating handleSetStar={handleSetStar} initialValue={1} isChangeable={true}/>
                    </Styles.StarsSection>
                    
                    <Styles.CommentSection>
                        <label htmlFor="comment">Comentário</label>
                        <textarea rows={5} maxLength={250} id={'comment'} name={'comment'}/>
                        <Button variant={'primary'}>Postar</Button>
                    </Styles.CommentSection>
                </Styles.Wrapper>
            </Styles.FormWrapper>
        </Styles.PostWrapper>
    );
}

export default PostForm;