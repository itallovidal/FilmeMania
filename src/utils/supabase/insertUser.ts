import {supabase} from "../supabase.config.ts";

export async function insertUser({username, password} : {username: string, password: string}): Promise<false | {username: string, id: string}>{
    const {data , error } =
        await supabase.from('users')
            .insert([{
                username,
                password
            }])
            .select('username, id')
            .single()

    if(error){
        console.log(error)
        return false
    }

    else
        return data
}