import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: sans-serif;
    background-color: #383636;
}
`
