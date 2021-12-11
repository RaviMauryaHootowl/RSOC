import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

const RsocEditor = () => {
    return (
        <AceEditor
            mode="java"
            theme="monokai"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={false}
            setOptions={{
                fontFamily: "monospace"
            }}
            fontSize={26}
            style={{
                width: '100%',
            }}
        />
    );
}

export default RsocEditor;