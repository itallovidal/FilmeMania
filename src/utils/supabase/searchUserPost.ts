import {PostgrestError} from "@supabase/supabase-js";
import {supabase} from "../supabase.config.ts";
import {IPOST} from "./getAllPosts.ts";

export async function searchUserPost(movieName: string): Promise<IPOST[]>{
    const {data, error} : {data: unknown, error: PostgrestError | null} =
        await supabase.from('posts')
            .select('comment, id, movie_id, rating, fk_user_id ')
            .eq('fk_user_id', movieName)

    if(error){
        throw new Error('Falha na requisição')
    }

    console.log(data)


    throw new Error('Erro nos posts')
}