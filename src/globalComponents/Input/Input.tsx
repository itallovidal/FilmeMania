import * as Styles from './Input.styled.ts'
import {HTMLProps} from "react";
import SelectInput from "./SelectInput.tsx";

interface IInput extends HTMLProps<HTMLInputElement>{
    labelName: string,
    isSelect?: boolean
}

function Input({isSelect, labelName,...props} : IInput) {

    const input = isSelect === undefined
        ? <input id={props.id} name={props.name} {...props} type="text"/>
        : (
            <Styles.SelectWrapper>
                <SelectInput id={props.id!} name={props.name!}/>
                <SelectInput id={props.id!} name={props.name!}/>
                <SelectInput id={props.id!} name={props.name!}/>
            </Styles.SelectWrapper>
        )

    return (
        <Styles.InputWrapper>
            <label htmlFor={props.id}>{labelName}</label>
            {input}
            <span className={''}>putz deu erro</span>
        </Styles.InputWrapper>
    );
}

export default Input;