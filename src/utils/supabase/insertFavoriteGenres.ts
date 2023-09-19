import {supabase} from "../supabase.config.ts";

export async function insertFavGenres(firstGen_id: number, secondGen_id: number, thirdGen_id:  number, user_id: string  ): Promise<boolean>{
    const {error } =
        await supabase.from('fav_genres')
            .insert([{
                fk_user_id: user_id,
                fk_genre_id: firstGen_id
            }, {
                fk_user_id: user_id,
                fk_genre_id: secondGen_id
            }, {
                fk_user_id: user_id,
                fk_genre_id: thirdGen_id
            }])

    if(error){
        console.log(error)
        return false
    }

    else
        return true
}
