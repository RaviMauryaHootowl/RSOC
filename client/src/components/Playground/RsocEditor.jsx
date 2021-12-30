import React,{useEffect, useRef} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import styled from "styled-components";
import RSOCMode from "../../mode/RSOCMode";

const CustomAceEditor = styled(AceEditor)`
    &::-webkit-scrollbar-thumb {
    background: #df4545;
    }
`;

const RsocEditor = ({ codeValue, setCodeValue }) => {

const aceEditorRef = useRef(null);

useEffect(() => {
    const rsocMode = new RSOCMode();
    if(aceEditorRef.current != null){
        console.log(aceEditorRef);
        aceEditorRef.current.editor.session.setMode(rsocMode);
    }
}, [aceEditorRef.current])

return (
    <CustomAceEditor
        ref={aceEditorRef}
        mode="text"
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