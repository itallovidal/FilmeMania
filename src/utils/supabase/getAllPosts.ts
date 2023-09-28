import {supabase} from "../supabase.config.ts";
import {PostgrestError} from "@supabase/supabase-js";

export interface IPOST{
    comment: string,
    id:  number,
    movie_id: number,
    rating: number,
    fk_user_id: string
}

function isArrayPosts(posts: unknown): posts is IPOST[]{
    if(!Array.isArray(posts)){
        return false
    }

    return 'id' in posts[0] && 'movie_id' in posts[0] && 'rating' in posts[0];
}

export async function getAllPosts(): Promise<IPOST[]>{
    const {data, error} : {data: unknown, error: PostgrestError | null} =
        await supabase.from('posts')
            .select('comment, id, movie_id, rating, fk_user_id ')
            .order('created_at', {ascending: false})

    if(error){
        throw new Error('Falha na requisição')
    }

    if(isArrayPosts(data)){
        return data
    }

    throw new Error('Erro nos posts')
}

export async function getAllUserPosts(id: string): Promise<IPOST[]>{
    const {data, error} : {data: unknown, error: PostgrestError | null} =
        await supabase.from('posts')
            .select('comment, id, movie_id, rating, fk_user_id ')
            .eq('fk_user_id', id)

    if(error){
        throw new Error('Falha na requisição')
    }

    if(isArrayPosts(data)){
        return data
    }

    throw new Error('Erro nos posts')
}