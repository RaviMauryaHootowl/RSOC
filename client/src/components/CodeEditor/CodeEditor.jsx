import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
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
    color: white;
	font-family: 'Readex Pro', sans-serif;
`;

const LogoContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const TutorialBtn = styled.button`
	background-color: transparent;
	color: white;
	outline: none;
	border: none;
	font-size: 22px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    cursor: pointer;
	&:hover{
		background-color: rgb(73, 73, 73);
	}
	@media(max-width: 600px){
		padding: 0 12px;
	}
	
`;

const TutorialBtnText = styled.span`
	@media(max-width: 600px){
		display: none;
	}
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
	@media(max-width: 600px){
		padding: 0 12px;
	}
`;

const CodeRunBtnText = styled.span`
	@media(max-width: 600px){
		display: none;
	}
`;

const CodeEditorPlayground = styled.div`
	width: 100%;
    flex: 1;
	overflow-y: hidden;
	padding: 12px;
`;


const RunIcon = styled(PlayArrowRoundedIcon)`
	margin-right: 10px;	
`;
const TutorialIcon = styled(BookmarkAddRoundedIcon)`
	margin-right: 10px;
`;

const APIURL = 'api/run';

const CodeEditor = ({setIsTutOpen}) => {

	const [codeValue, setCodeValue] = useState("");
	const [outputValue, setOutputValue] = useState("");
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

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
			setIsError(false);
			setErrorMessage("");
		}else{
			setOutputValue("Oops!");
			setIsError(true);
			setErrorMessage(`Error: ${output['message']}`);
		}
	}

    return (
        <CodeEditorContainer>
			<CodeEditorHeader>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<TutorialBtn onClick={() => {setIsTutOpen(true);}}>
					<TutorialIcon />
					<TutorialBtnText>Tutorial</TutorialBtnText>
				</TutorialBtn>
				<CodeRunBtn onClick={() => {runCode();}}>
					<RunIcon />
					<CodeRunBtnText>Run</CodeRunBtnText>
				</CodeRunBtn>
			</CodeEditorHeader>
			<CodeEditorPlayground>
				<Playground codeValue={codeValue} setCodeValue={setCodeValue} outputValue={outputValue} isError={isError} errorMessage={errorMessage} setIsError={setIsError} />
			</CodeEditorPlayground>
        </CodeEditorContainer>
    );
}


export default CodeEditor;
