import React, {ReactNode} from "react";


const GlobalContext= React.createContext({} as IContext)

interface ProviderProps{
    children: ReactNode
}

interface IContext{
    temp: number
}


function GlobalContextProvider({children} : ProviderProps) {
    const temp = 1

    return (
        <GlobalContext.Provider value={{temp}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;