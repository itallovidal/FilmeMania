import * as Styles from './PostForm.styled.ts'
import Input from "../../../../globalComponents/Input/Input.tsx";
import Button from "../../../../globalComponents/Button/Button.tsx";
import poster from "../../../../assets/poster.png"
import StarsRating from "../../../../globalComponents/StarsRating/StarsRating.tsx";
import {MagnifyingGlass} from "phosphor-react";
import {searchMovie} from "../../../../utils/api.ts";
import {FormEvent} from "react";
function PostForm() {

    function temporary(e: FormEvent){
        e.preventDefault()
    }

    return (
        <Styles.PostWrapper>
            <picture>
                <img src={poster} alt=""/>
            </picture>

            <Styles.FormWrapper onSubmit={temporary}>
                <Styles.Wrapper>
                    <Styles.StarsSection>
                        <Input labelName={'Nome do Filme'} id={'movieName'} name={'movieName'} />
                        <Button onClick={()=> searchMovie('far from home')} id={'searchButton'} variant={"neutral"}><MagnifyingGlass size={16} /></Button>
                        <StarsRating initialValue={0} isChangeable={true}/>
                    </Styles.StarsSection>
                    
                    <Styles.CommentSection>
                        <label htmlFor="comment">Comentário</label>
                        <textarea rows={8} maxLength={250} id={'comment'} name={'comment'}/>
                    </Styles.CommentSection>
                </Styles.Wrapper>

                <Button variant={'primary'}>Postar</Button>
            </Styles.FormWrapper>
        </Styles.PostWrapper>
    );
}

export default PostForm;