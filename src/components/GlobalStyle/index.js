import { createGlobalStyle } from "styled-components"
import Font from "../../../static/assets/Balkan.ttf"
import { styles } from "../../constants"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Balkan;
        src: url(${Font});
    }
    * {
        font-family: Balkan;
        color: ${styles.color.black};
    }
    html, body {
        margin: 0;
        background: ${styles.color.background};
    }
    h1 {
        font-size: 25px;
        font-weight: normal;
    }
    /** notað í forsíðu þegar verkefni er valið */
    .hiddenProject {
        width: 0 !important;
    }
`
