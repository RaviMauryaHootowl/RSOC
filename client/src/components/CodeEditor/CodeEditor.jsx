import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Playground from '../Playground/Playground';

const CodeEditorContainer = styled.div`
	background-color: #252525;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(26, 26, 26, 0.596) 4px 4px 10px;
    display: flex;
    flex-direction: column;
`;

const CodeEditorHeader = styled.div`
	width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    color: white;
	font-family: 'Readex Pro', sans-serif;
`;

const CodeRunBtn = styled.button`
	background-color: transparent;
	color: white;
	outline: none;
	border: none;
	font-size: 22px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 0 20px 0 0;
    cursor: pointer;
	&:hover{
		background-color: rgb(73, 73, 73);
	}
`;

const CodeEditorPlayground = styled.div`
	width: 100%;
    flex: 1;	
	padding: 12px;
`;

const CodeEditor = () => {
    return (
		// <Button>Hello World</Button>
        <CodeEditorContainer>
			<CodeEditorHeader>
				<Logo />
				<CodeRunBtn>
					<PlayArrowRoundedIcon />
					Run
				</CodeRunBtn>
			</CodeEditorHeader>
			<CodeEditorPlayground>
				<Playground />
			</CodeEditorPlayground>
        </CodeEditorContainer>
    );
}


export default CodeEditor;