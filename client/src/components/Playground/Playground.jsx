import React from "react";
import styled from "styled-components";
import RsocEditor from "./RsocEditor";
import BugReportIcon from '@mui/icons-material/BugReport';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const PlaygroundContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const CodeWindow = styled.div`
    flex: 3;
    padding-right: 1rem;
`;

const OutputWindow = styled.div`
    background-color: #2c2c2c;
    border-radius: 8px;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 12px;
    
`;

const OutputValueWindow = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #2e2e2e;
    }
    &::-webkit-scrollbar-thumb {
        background: #575757;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #787878;
    }
`;

const OutputText = styled.span`
    color: white;
    font-size: 2rem;
    white-space: pre-wrap;
    font-family: 'Cascadia Code', sans-serif;
`;

const Playground = ({codeValue, setCodeValue, outputValue, isError, setIsError, errorMessage}) => {
    return (
        <PlaygroundContainer>
            <CodeWindow>
                <RsocEditor codeValue={codeValue} setCodeValue={setCodeValue}/>
            </CodeWindow>
            <OutputWindow>
                <OutputValueWindow>
                    <OutputText>{`${outputValue}`}</OutputText>
                </OutputValueWindow>
                {(isError) && <ErrorPopup setIsError={setIsError} errorMessage={errorMessage}/>}
            </OutputWindow>
        </PlaygroundContainer>
    );
}

const ErrorPopupContainer = styled.div`
    width: 100%;
    background: #474747;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    margin-top: 8px;
`;

const ErrorIcon = styled(BugReportIcon)`
    color: #ee5847;
    margin-right: 8px;
`;

const CloseBtn = styled(CancelRoundedIcon)`
    color: #8b8b8b;
    margin-left: 8px;
    cursor: pointer;
`;

const ErrorMessage = styled.div`
    color: white;
    flex: 1;
`;

const ErrorPopup = ({errorMessage, setIsError}) => {
    return (
        <ErrorPopupContainer>
            <ErrorIcon fontSize="large"/>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <CloseBtn onClick={() => { setIsError(false); }}/>
        </ErrorPopupContainer>
    );
}

export default Playground;