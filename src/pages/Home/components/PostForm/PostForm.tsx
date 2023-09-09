import * as Styles from './PostForm.styled.ts'
import Input from "../../../../globalComponents/Input/Input.tsx";
import Button from "../../../../globalComponents/Button/Button.tsx";
import poster from "../../../../assets/poster.png"
function PostForm() {
    return (
        <Styles.PostWrapper>
            <picture>
                <img src={poster} alt=""/>
            </picture>

            <Styles.FormWrapper>
                <div>
                    <div>
                        <Input labelName={'Nome do Filme'} id={'movieName'} name={'movieName'} />
                    </div>

                    <Input labelName={'Comentários'} id={'comment'} name={'comment'}/>
                </div>

                <Button variant={'primary'}>Postar</Button>
            </Styles.FormWrapper>
        </Styles.PostWrapper>
    );
}

export default PostForm;