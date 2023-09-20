import {supabase} from "../supabase.config.ts";

export async function checkUser({username}: {username: string, password: string}){
    const { count } = await supabase
        .from('users')
        .select('id', { count: 'exact', head: true }).match({
            username: username,
        })


    if(count){
        throw new Error('Usuário já existe no banco.')
    }

    return
}