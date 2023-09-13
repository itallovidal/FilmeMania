import * as Styles from "../Login/login.styled.ts";
import * as AccountStyles from '../accountConnection.styled.ts'
import Input from "../../../globalComponents/Input/Input.tsx";
import Button from "../../../globalComponents/Button/Button.tsx";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string()
        .min(3, {message: `Mínimo de 3 caracteres.`}),
    password: z.string()
        .min(3, {message: `Mínimo de 3 caracteres.`}),
    genre_1: z.string().min(2),
    genre_2: z.string().min(2),
    genre_3: z.string().min(2)
}).refine(({genre_1, genre_2, genre_3})=> genre_1 !== genre_2 && genre_1 !== genre_3 && genre_2 !== genre_3,
    {message: 'erro', path: ['genre_1']})


interface ISignin extends z.infer<typeof schema>{}

function SignIn() {
    const {handleSubmit, register, formState:{errors}} = useForm<ISignin>({
        resolver: zodResolver(schema)
    })

    function signin(data: ISignin){
        console.log(data)
    }

    return (
        <AccountStyles.FormWrapper>
            <h1>Cadastramento</h1>

            <form onSubmit={handleSubmit(signin)}>
                <Input <ISignin> errorMessage={errors.name?.message} register={register} labelName={'Nome'} id={'name'} placeholder={'Digite seu nome..'}/>
                <Input <ISignin> errorMessage={errors.password?.message} register={register} labelName={'Senha'} id={'password'} placeholder={'Digite sua senha..'}/>
                <Input <ISignin> errorMessage={errors.genre_1 || errors.genre_2 || errors.genre_3 ? 'Selecione 3 gêneros diferentes.' : undefined } register={register} isSelect labelName={'Gêneros Favoritos'} id={'favoriteGenres'}/>
                <Button variant={'primary'}>Cadastrar</Button>
            </form>



            <Styles.SignUpWrapper>
                <p>Já possui conta?</p>
                <Link to={'/account/login'}>Cadastre-se</Link>
            </Styles.SignUpWrapper>

        </AccountStyles.FormWrapper>
    );
}

export default SignIn;