import {PostgrestError} from "@supabase/supabase-js";
import {supabase} from "../supabase.config.ts";

interface IGenres {
    genres: { name: string }
}


function isDataValid(obj: unknown): obj is IGenres[]{
    if(!Array.isArray(obj)){
        return false
    }

    return 'genres' in obj[0] && 'name' in obj[0].genres;
}


export async function getUserFavoriteGenres(id: string) : Promise<IGenres[]>{
    const {data, error} : {data: unknown, error: PostgrestError | null} =
        await supabase.from('fav_genres')
            .select('genres(name)')
            .eq('fk_user_id', id)

    if(error){
        throw new Error('erro para pegar os generos favoritos')
    }

    if(isDataValid(data)){
        return data
    }

    throw new Error('erro para pegar os generos favoritos')
}