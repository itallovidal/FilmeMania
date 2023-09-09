import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GlobalStyled} from "./styles/global.styled.ts";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/theme.ts";
import Navbar from "./globalComponents/Navbar/Navbar.tsx";
import GlobalContextProvider from "./context/GlobalContextProvider.tsx";
import AccountConnection from "./pages/AccountConnection/AccountConnection.tsx";
import Login from "./pages/AccountConnection/Login/Login.tsx";
import SignIn from "./pages/AccountConnection/SignIn/SignIn.tsx";
import Home from "./pages/Home/Home.tsx";

function App() {

  return (
    <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
            <GlobalContextProvider>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>

                    <Route path={'account'} element={<AccountConnection/>}>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'signin'} element={<SignIn/>}/>
                    </Route>

                    <Route/>
                </Routes>
            </GlobalContextProvider>
            <GlobalStyled/>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
