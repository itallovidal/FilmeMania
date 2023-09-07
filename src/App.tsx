import {BrowserRouter} from "react-router-dom";
import {GlobalStyled} from "./styles/global.styled.ts";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/theme.ts";

function App() {

  return (
    <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
              <h1>FilmeMania</h1>
            <GlobalStyled/>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
