import React, {ReactNode} from "react";


export const GlobalContext= React.createContext({} as IContext)

interface ProviderProps{
    children: ReactNode
}

export interface IUserData{
    user_id: string,
    username: string
    fav_gen_1: string,
    fav_gen_2: string,
    fav_gen_3: string,
}

interface IContext{
    user: IUserData | null,
    setUserData: (a: IUserData)=> void
}



function GlobalContextProvider({children} : ProviderProps) {
    const  [user, setUser] = React.useState<IUserData | null>(null)

    function setUserData(userData: IUserData){
        setUser(userData)
    }

    return (
        <GlobalContext.Provider value={{user, setUserData}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;