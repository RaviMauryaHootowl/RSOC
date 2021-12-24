import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import styled from "styled-components";

const CustomAceEditor = styled(AceEditor)`
    &::-webkit-scrollbar-thumb {
    background: #df4545;
    }
`;

const RsocEditor = ({ codeValue, setCodeValue }) => {
    return (
        <CustomAceEditor
            mode="java"
            theme="monokai"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={false}
            setOptions={{
                fontFamily: "monospace"
            }}
            fontSize={26}
            value={codeValue}
            onChange={(val) => {
                setCodeValue(val);
            }}
            style={{
                width: '100%',
                borderRadius: '8px',
            }}
        />
    );
}

export default RsocEditor;