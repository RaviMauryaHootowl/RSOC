import React,{useState, useEffect, useRef} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import styled from "styled-components";
import RSOCMode from "../../mode/RSOCMode";

const CustomAceEditor = styled(AceEditor)`
    width: 100%;
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

    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });
    const updateSize = () =>
        setSize({
            x: window.innerWidth,
            y: window.innerHeight
        });
    useEffect(() => (window.onresize = updateSize), []);

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
            fontSize={(size.x != null && size.x < 600) ? 20 : 25}
            value={codeValue}
            height="100%"
            onChange={(val) => {
                setCodeValue(val.toUpperCase());
            }}
            style={{
                width: '100%',
                borderRadius: '8px',
            }}
        />
    );
}

export default RsocEditor;