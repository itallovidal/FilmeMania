import * as Styles from './login.styled.ts'
import * as AccountStyles from '../accountConnection.styled.ts'
import Input from "../../../globalComponents/Input/Input.tsx";
import Button from "../../../globalComponents/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {GlobalContext} from "../../../context/GlobalContextProvider.tsx";

import React from 'react'
import {userLogin} from "../../../utils/supabase/login.ts";

const schema = z.object({
    username: z.string()
        .min(3, {message: `Mínimo de 3 caracteres.`}),
    password: z.string()
        .min(3, {message: `Mínimo de 3 caracteres.`}),
})

export interface ILogin extends z.infer<typeof schema>{}

function Login() {
    const [loginError, setLoginError] = React.useState<null | string>(null)
    const navigate = useNavigate()
    const {setUserData} = React.useContext(GlobalContext)
    const {handleSubmit,  formState: {errors},  register} = useForm<ILogin>({
        resolver: zodResolver(schema),
    })


    function login(data: ILogin){
        console.log(data)

        userLogin(data).then((response)=>{
            if(response){
                setUserData(response)
                navigate('/')
                return
            }
        }).catch((e)=>{
        console.log(e)
        if(e instanceof Error){
            setLoginError(e.message)
            console.log(e.message)
        }
    })}

    return (
        <AccountStyles.FormWrapper>
            <h1>FilmeMania</h1>

            <form onSubmit={handleSubmit(login)}>
                <Input <ILogin> errorMessage={errors.username?.message} register={register} labelName={'Nome'} id={'username'} placeholder={'Digite seu nome..'}/>
                <Input <ILogin> errorMessage={errors.password?.message} register={register} labelName={'Senha'} id={'password'} placeholder={'Digite sua senha..'}/>

                {loginError && <p>{loginError}</p>}
                <Button type={'submit'} variant={'primary'}>Entrar</Button>
            </form>

            <Styles.SignUpWrapper>
                <p>Não possui conta?</p>
                <Link to={'/account/signin'}>Entrar </Link>
            </Styles.SignUpWrapper>

        </AccountStyles.FormWrapper>
    );
}

export default Login;