import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import {HTMLProps} from "react";


interface ISelectInput<T extends FieldValues> extends HTMLProps<HTMLSelectElement>{
    register: UseFormRegister<T>
}
function SelectInput<T extends FieldValues>({register, ...props}: ISelectInput<T>) {
    return (
        <select {...register(props.id as Path<T>)}>
            <option value="">Escolher</option>
            <option value="terror">Terror</option>
            <option value="acao">Ação</option>
            <option value="suspense">Suspense</option>
            <option value="drama">Drama</option>
            <option value="comedia">Comédia</option>
            <option value="romance">Romance</option>
            <option value="infantil">Infantil</option>
        </select>
    );
}

export default SelectInput;