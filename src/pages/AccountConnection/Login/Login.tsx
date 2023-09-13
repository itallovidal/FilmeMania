import * as Styles from './login.styled.ts'
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
})

interface ILogin extends z.infer<typeof schema>{}

function Login() {
    const {handleSubmit, formState: {errors},  register} = useForm<ILogin>({
        resolver: zodResolver(schema)
    })

    function login(data: ILogin){
        console.log(data)
    }

    return (
        <AccountStyles.FormWrapper>
            <h1>FilmeMania</h1>

            <form onSubmit={handleSubmit(login)}>
                <Input <ILogin> errorMessage={errors.name?.message} register={register} labelName={'Nome'} id={'name'} placeholder={'Digite seu nome..'}/>
                <Input <ILogin> errorMessage={errors.password?.message} register={register} labelName={'Senha'} id={'password'} placeholder={'Digite sua senha..'}/>
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