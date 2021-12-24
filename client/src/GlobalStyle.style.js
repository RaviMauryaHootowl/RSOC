import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #d8d8d8;
    }
    .ace_scrollbar::-webkit-scrollbar {
        width: 10px;
    }
    .ace_scrollbar::-webkit-scrollbar-track {
        background: #2e2e2e;
    }
    .ace_scrollbar::-webkit-scrollbar-thumb {
        background: #575757;
    }
    .ace_scrollbar::-webkit-scrollbar-thumb:hover {
        background: #787878;
    }
`;

export default GlobalStyle;