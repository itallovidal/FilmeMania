import * as Styles from './Input.styled.ts'
import {HTMLProps} from "react";
import SelectInput from "./SelectInput.tsx";
import {FieldValues, Path, UseFormRegister} from "react-hook-form";

interface IInput<T extends FieldValues> extends HTMLProps<HTMLInputElement>{
    labelName: string,
    isSelect?: boolean,
    register: UseFormRegister<T>,
    errorMessage?: string
}

function Input<T extends FieldValues>({errorMessage, register, isSelect, labelName,...props} : IInput<T>) {

    const input = isSelect === undefined
        ? <input {...register(props.id as Path<T>)} type={props.type} {...props} />
        : (
            <Styles.SelectWrapper>
                <SelectInput register={register} id={'genre_1'}/>
                <SelectInput register={register} id={'genre_2'}/>
                <SelectInput register={register} id={'genre_3'}/>
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