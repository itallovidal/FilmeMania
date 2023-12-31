import * as Styles from "../Login/login.styled.ts";
import * as AccountStyles from '../accountConnection.styled.ts'
import Input from "../../../globalComponents/Input/Input.tsx";
import Button from "../../../globalComponents/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {GlobalContext} from "../../../context/GlobalContextProvider.tsx";
import {createUser} from "../../../utils/supabase/createUser.ts";

const schema = z.object({
    username: z.string()
        .min(3, {message: `Mínimo de 3 caracteres.`}),
    password: z.string()
        .min(3, {message: `Mínimo de 3 caracteres.`}),
    fav_gen_1: z.number().min(1),
    fav_gen_2: z.number().min(1),
    fav_gen_3: z.number().min(1)
}).refine(({fav_gen_1, fav_gen_2, fav_gen_3})=> fav_gen_1 !== fav_gen_2 && fav_gen_1 !== fav_gen_3 && fav_gen_2 !== fav_gen_3,
    {message: 'erro', path: ['fav_gen_1']})


export interface ISignin extends z.infer<typeof schema>{}

function SignIn() {
    const [error, setError] = React.useState<null | string>(null)
    const navigate = useNavigate()
    const {setUserData} = React.useContext(GlobalContext)
    const {handleSubmit, register, formState:{errors}} = useForm<ISignin>({
        resolver: zodResolver(schema)
    })

    function signin(data: ISignin){
        createUser(data).then(response=>{
            if(response){
                setUserData(response)
                navigate('/')
            }
            else{
                console.log('putise')
            }
        }).catch((e)=>{
            setError(e.message)
        })
    }

    return (
        <AccountStyles.FormWrapper>
            <h1>Cadastramento</h1>

            <form onSubmit={handleSubmit(signin)}>
                <Input <ISignin> errorMessage={errors.username?.message} register={register} labelName={'Nome'} id={'username'} placeholder={'Digite seu nome..'}/>
                <Input <ISignin> errorMessage={errors.password?.message} register={register} labelName={'Senha'} id={'password'} placeholder={'Digite sua senha..'}/>
                <Input <ISignin> errorMessage={errors.fav_gen_1 ? 'Selecione 3 gêneros diferentes.' : undefined } register={register} isSelect labelName={'Gêneros Favoritos'} id={'favoriteGenres'}/>

                {error && <p>{error}</p>}

                <Button variant={'primary'}>Cadastrar</Button>
            </form>



            <Styles.SignUpWrapper>
                <p>Já possui conta?</p>
                <Link to={'/account/login'}>Entre</Link>
            </Styles.SignUpWrapper>

        </AccountStyles.FormWrapper>
    );
}

export default SignIn;