import * as Styles from './Input.styled.ts'
import {HTMLProps} from "react";
import SelectInput from "./SelectInput.tsx";
import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import React from 'react'
import {supabase} from "../../utils/supabase.config.ts";
interface IInput<T extends FieldValues> extends HTMLProps<HTMLInputElement>{
    labelName: string,
    isSelect?: boolean,
    register: UseFormRegister<T>,
    errorMessage?: string
}

export interface IGenre{
    id: string,
    name: string
}

function Input<T extends FieldValues>({errorMessage, register, isSelect, labelName,...props} : IInput<T>) {
    const [genreList, setGenreList] = React.useState<IGenre[]>([])

    async function getGenres(): Promise<IGenre[] | false >{
        const {data, error} =
            await supabase.from('genres').select()

        if(!data){
            console.log(error)
            return false
        }

        console.log(data)

        return data
    }

    React.useEffect(()=>{
        if(isSelect){
            getGenres().then((response)=> {
                if(response){
                    setGenreList(response)
                    return
                }

                console.log('pegou o gênero errado')
                return
            })
        }
    }, [])

    const input = isSelect === undefined
        ? <input {...register(props.id as Path<T>)} type={props.type} {...props} />
        : (
            <Styles.SelectWrapper>
                <SelectInput genreList={genreList} register={register} id={'fav_gen_1'}/>
                <SelectInput genreList={genreList} register={register} id={'fav_gen_2'}/>
                <SelectInput genreList={genreList} register={register} id={'fav_gen_3'}/>
            </Styles.SelectWrapper>
        )

    return (
        <Styles.InputWrapper>
            <label htmlFor={props.id}>{labelName}</label>
            {input}
            <span className={errorMessage ? 'errorActive' : undefined}>{errorMessage}</span>
        </Styles.InputWrapper>
    );
}

export default Input;