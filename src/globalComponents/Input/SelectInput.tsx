import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import React, {HTMLProps} from "react";
import {supabase} from "../../utils/supabase.config.ts";


interface ISelectInput<T extends FieldValues> extends HTMLProps<HTMLSelectElement>{
    register: UseFormRegister<T>
}

interface IGenre{
    id: string,
    name: string
}
function SelectInput<T extends FieldValues>({register, ...props}: ISelectInput<T>) {
    const [genreList, setGenreList] = React.useState<IGenre[]>([])

    React.useEffect(()=>{
        getGenres().then((response)=> {
            if(response){
                setGenreList(response)
                return
            }

            console.log('pegou o gênero errado')
            return
        })
    }, [])

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

    if(genreList.length === 0)
        return null

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