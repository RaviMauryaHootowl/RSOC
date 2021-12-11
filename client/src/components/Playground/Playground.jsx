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
    /* background-color: red; */
    flex: 3;
    padding-right: 1rem;
`;

const OutputWindow = styled.div`
    background-color: #2c2c2c;
    border-radius: 8px;
    flex: 2;
`;

const Playground = () => {
    return (
        <PlaygroundContainer>
            <CodeWindow>
                <RsocEditor />
            </CodeWindow>
            <OutputWindow></OutputWindow>
        </PlaygroundContainer>
    );
}

export default Playground;