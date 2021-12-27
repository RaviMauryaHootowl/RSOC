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
    .ace_editor{
        font-family: 'Cascadia Code', sans-serif;
    }
    .ace_scrollbar::-webkit-scrollbar {
        width: 10px;
    }
    .ace_scrollbar::-webkit-scrollbar-track {
        background: #2e2e2e;
    }
    .ace_scrollbar::-webkit-scrollbar-thumb {
        background: #575757;
        border-radius: 10px;
    }
    .ace_scrollbar::-webkit-scrollbar-thumb:hover {
        background: #787878;
    }
    .ace_comments{
        color: #808080;
    }
    .ace_commands{
        color: #f58540;
    }
    .ace_numbers{
        color: #47a3ff;
    }
    .ace_tags{
        color: #5fff59;
    }
`;

export default GlobalStyle;