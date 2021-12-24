import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Playground from '../Playground/Playground';
import axios from 'axios';

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
	overflow-y: hidden;
	padding: 12px;
`;

const APIURL = 'run';

const CodeEditor = () => {

	const [codeValue, setCodeValue] = useState("");
	const [outputValue, setOutputValue] = useState("");

	useEffect(() => {
		console.log(codeValue);
	}, [codeValue]);

	const runCode = async () => {
		const data = {
			"code": codeValue
		}
		const res = await axios.post(APIURL, data);
		const output = res.data;
		console.log(output);
		if(output['status'] == 'done'){
			setOutputValue(output['output']);
		}else{
			alert(`Error: ${output['message']}`);
		}
	}

    return (
        <CodeEditorContainer>
			<CodeEditorHeader>
				<Logo />
				<CodeRunBtn onClick={() => {runCode();}}>
					<PlayArrowRoundedIcon />
					Run
				</CodeRunBtn>
			</CodeEditorHeader>
			<CodeEditorPlayground>
				<Playground codeValue={codeValue} setCodeValue={setCodeValue} outputValue={outputValue} />
			</CodeEditorPlayground>
        </CodeEditorContainer>
    );
}


export default CodeEditor;