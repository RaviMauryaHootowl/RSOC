import React from "react";
import styled from "styled-components";
import RsocEditor from "./RsocEditor";

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
    padding: 12px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #2e2e2e;
    }
    &::-webkit-scrollbar-thumb {
        background: #575757;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #787878;
    }
`;

const OutputText = styled.span`
    color: white;
    font-size: 2rem;
    white-space: pre-wrap;
`

const Playground = ({codeValue, setCodeValue, outputValue}) => {
    return (
        <PlaygroundContainer>
            <CodeWindow>
                <RsocEditor codeValue={codeValue} setCodeValue={setCodeValue}/>
            </CodeWindow>
            <OutputWindow>
                <OutputText>{`${outputValue}`}</OutputText>
            </OutputWindow>
        </PlaygroundContainer>
    );
}

export default Playground;