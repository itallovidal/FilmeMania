import React, {ReactNode} from "react";
import {useNavigate} from "react-router-dom";


export const GlobalContext= React.createContext({} as IContext)

interface ProviderProps{
    children: ReactNode,
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
    setUserData: (a: IUserData)=> void,
    resetUserData: () => void
}



function GlobalContextProvider({children} : ProviderProps) {
    const  [user, setUser] = React.useState<IUserData | null>(null)
    const navigate = useNavigate()

    React.useEffect(()=>{
        const userInfo = localStorage.getItem('userInfo')

        if(userInfo){
            setUser(JSON.parse(userInfo))
        }
    }, [])

    function resetUserData(){
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    function setUserData(userData: IUserData ){
        localStorage.setItem('userInfo', JSON.stringify(userData))
        setUser(userData)
    }

    return (
        <GlobalContext.Provider value={{user, setUserData, resetUserData}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;