import {ISignin} from "../../pages/AccountConnection/SignIn/SignIn.tsx";
import {IUserData} from "../../context/GlobalContextProvider.tsx";
import {insertUser} from "./insertUser.ts";
import {insertFavGenres} from "./insertFavoriteGenres.ts";
import {getUserFavoriteGenres} from "./getUserFavoriteGenres.ts";





export async function createUser(user: ISignin ) : Promise<IUserData | false>{
    const insertUserResponse = await insertUser(user)

    if(!insertUserResponse){
        return false
    }

    const response = await insertFavGenres( user.fav_gen_1, user.fav_gen_2, user.fav_gen_3, insertUserResponse.id)

    if(!response){
        return false
    }

    const data = await getUserFavoriteGenres(insertUserResponse.id)

    if(!data){
        return false
    }


    return {
        user_id: insertUserResponse.id,
        username: insertUserResponse.username,
        fav_gen_1: data[0].genres.name,
        fav_gen_2: data[1].genres.name,
        fav_gen_3: data[2].genres.name,
    }
}
