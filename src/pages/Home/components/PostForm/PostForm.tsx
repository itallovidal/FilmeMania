import * as Styles from './PostForm.styled.ts'
import Input from "../../../../globalComponents/Input/Input.tsx";
import Button from "../../../../globalComponents/Button/Button.tsx";
import poster from "../../../../assets/poster.png"
import StarsRating from "../../../../globalComponents/StarsRating/StarsRating.tsx";
function PostForm() {
    return (
        <Styles.PostWrapper>
            <picture>
                <img src={poster} alt=""/>
            </picture>

            <Styles.FormWrapper>
                <Styles.Wrapper>
                    <Styles.StarsSection>
                        <Input labelName={'Nome do Filme'} id={'movieName'} name={'movieName'} />
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