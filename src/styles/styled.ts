import 'styled-components'
import {defaultTheme as myTheme} from "./theme.ts";

type MyTheme = typeof myTheme

declare module 'styled-components'{
    export interface DefaultTheme extends MyTheme{}
}