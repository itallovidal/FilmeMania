import {supabase} from "./supabase.config.ts";
import {ISignin} from "../pages/AccountConnection/SignIn/SignIn.tsx";
import {IUserData} from "../context/GlobalContextProvider.tsx";
import {ILogin} from "../pages/AccountConnection/Login/Login.tsx";

export async function newPost(){
    // const {data, error} = await supabase.from('posts')
}


export async function createUser(user: ISignin ) : Promise<IUserData | false>{
    const {data , error } = await supabase.from('users').insert([user]).select('user_id, fav_gen_1, fav_gen_2, fav_gen_3, username').single()

    if(error){
        console.log(error)
        return false
    }

    else
        return data
}

export async function logIn(userData : ILogin) : Promise<IUserData | false>{

    const{data, error} = await supabase.from('users')
        .select('user_id, username, fav_gen_1, fav_gen_2, fav_gen_3')
        .match({
        username: userData.username,
        password: userData.password
    }).single()

    if(error){
        console.log(error)
    }

    if(data)
        return data

    return false
}