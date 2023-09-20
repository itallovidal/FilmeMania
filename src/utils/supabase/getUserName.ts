import {supabase} from "../supabase.config.ts";

export async function getUserName(id: string) : Promise<{ username: string }>{
    const {data, error} =
        await supabase.from('users')
            .select('username')
            .match({
                id: id
            }).single()

    console.log(error)
    if(error?.code === 'PGRST116'){
        throw new Error('Usuário não encontrado.')
    }

    if(data){
        return data.username
    }

    throw new Error('data eh null.')
}