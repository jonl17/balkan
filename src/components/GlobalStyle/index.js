import { createGlobalStyle } from "styled-components"
import Font from "../../../static/assets/Balkan.ttf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Balkan;
        src: url(${Font});
    }
    * {
        font-family: Balkan;
    }
    html, body {
        margin: 0;
    }
    h1 {
        font-size: 25px;
        font-weight: normal;
    }
`
