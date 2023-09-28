import {supabase} from "../supabase.config.ts";

export async function postRating(userId: string, movieId: number, rating: number, movieTitle: string, comment: string){
    const {error} = await supabase.from('posts').insert({
        fk_user_id: userId,
        movie_id: movieId,
        rating: rating,
        comment: comment,
        movie_title: movieTitle
    })

    if(error){
        console.log(error)
        throw new Error('Não foi possível fazer o coisa.')
    }

    return true
}