import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GlobalStyled} from "./styles/global.styled.ts";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/theme.ts";
import Navbar from "./globalComponents/Navbar/Navbar.tsx";
import GlobalContextProvider from "./context/GlobalContextProvider.tsx";

function App() {

  return (
    <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
            <GlobalContextProvider>
                <Navbar/>
                <Routes>
                    <Route/>
                    <Route/>
                    <Route/>
                </Routes>
            </GlobalContextProvider>
            <GlobalStyled/>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
