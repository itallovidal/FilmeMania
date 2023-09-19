import {supabase} from "../supabase.config.ts";

interface IGetUser {
    username: string,
    password: string
}
export async function getUser(userLogin : IGetUser){
    const {data, error} =
        await supabase.from('users')
            .select('id, username')
            .match({
                username: userLogin.username,
                password: userLogin.password
            }).single()

    if(error){
        return false
    }

    return data
}