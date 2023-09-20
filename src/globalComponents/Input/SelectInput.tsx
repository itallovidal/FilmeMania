import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import {HTMLProps} from "react";
import {IGenre} from "./Input.tsx";

interface ISelectInput<T extends FieldValues> extends HTMLProps<HTMLSelectElement>{
    register: UseFormRegister<T>,
    genreList: IGenre[]
}


function SelectInput<T extends FieldValues>({register, genreList, ...props}: ISelectInput<T>) {

    return (
        <select {...register(props.id as Path<T>,{ valueAsNumber: true})}>
            <option value="0">Escolher</option>
            {
                genreList.map((genre)=> <option key={genre.id} value={genre.id}>{genre.name}</option>)
            }
        </select>
    );
}

export default SelectInput;