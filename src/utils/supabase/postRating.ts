import {supabase} from "../supabase.config.ts";

export async function postRating(userId: string, movieId: number, rating: number, comment: string){
    const {error} = await supabase.from('posts').insert({
        fk_user_id: userId,
        movie_id: movieId,
        rating: rating,
        comment: comment,
    })

    if(error){
        console.log(error)
        throw new Error('Não foi possível fazer o coisa.')
    }

    return true
}