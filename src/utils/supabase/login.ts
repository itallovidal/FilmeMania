import {ILogin} from "../../pages/AccountConnection/Login/Login.tsx";
import {IUserData} from "../../context/GlobalContextProvider.tsx";
import {getUser} from "./getUser.ts";
import {getUserFavoriteGenres} from "./getUserFavoriteGenres.ts";


export async function userLogin(userData : ILogin) : Promise<IUserData | false>{
    const getUserResponse = await getUser(userData)

    if(getUserResponse){
        const favoriteGenres = await getUserFavoriteGenres(getUserResponse.id)

        if(favoriteGenres){
            return {
                user_id: getUserResponse.id,
                username: getUserResponse.username,
                fav_gen_1: favoriteGenres[0].genres.name,
                fav_gen_2: favoriteGenres[1].genres.name,
                fav_gen_3: favoriteGenres[2].genres.name,
            }
        }
    }

    return false
}

