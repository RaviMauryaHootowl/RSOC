(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{98:function(e,n,t){"use strict";t.r(n);var r,c,o,i,a,s,b,d,l,u,j,x,h,p,O,f,g,w=t(2),m=t(0),v=t(52),k=t.n(v),y=t(54),C=t(30),I=t(3),S=t(9),E=t(1),V=I.b.div(r||(r=Object(w.a)(["\n\tfont-size: 22px;\n    display: flex;\n    align-items: center;\n    padding: 0 24px;\n"]))),M=I.b.img(c||(c=Object(w.a)(["\n    height: 36px;\n    margin-right: 12px;\n"]))),R=function(){return Object(E.jsxs)(V,{children:[Object(E.jsx)(M,{src:S.a}),"R. S. O. C."]})},z=t(88),F=t.n(z),P=t(55),D=t.n(P),$=(t(63),t(64),t(65)),H=t(91),J=t(90),U=(t(66),function(e){Object(H.a)(t,e);var n=Object(J.a)(t);function t(){var e;return Object($.a)(this,t),(e=n.call(this)).$rules={start:[{token:"comments",regex:/^~.*$/},{token:"tags",regex:/:.*$/},{token:"commands",regex:/(?:SET|ADD|SUB|MUL|DIV|INR|DCR|SHOW|IFG|IFL|IFE|IFN|JUMP|SKIP)\b/,caseInsensitive:!0},{token:"numbers",regex:/[0-9]+\b/}]},e}return t}(window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules)),q=function(e){Object(H.a)(t,e);var n=Object(J.a)(t);function t(){var e;return Object($.a)(this,t),(e=n.call(this)).HighlightRules=U,e}return t}(window.ace.acequire("ace/mode/text").Mode),L=Object(I.b)(D.a)(o||(o=Object(w.a)(["\n    &::-webkit-scrollbar-thumb {\n    background: #df4545;\n    }\n"]))),N=function(e){var n=e.codeValue,t=e.setCodeValue,r=Object(m.useRef)(null);return Object(m.useEffect)((function(){var e=new q;null!=r.current&&(console.log(r),r.current.editor.session.setMode(e))}),[r.current]),Object(E.jsx)(L,{ref:r,mode:"text",theme:"monokai",editorProps:{$blockScrolling:!0},showPrintMargin:!1,setOptions:{fontFamily:"Cascadia Code"},fontSize:26,value:n,onChange:function(e){t(e)},style:{width:"100%",borderRadius:"8px"}})},T=t(67),_=t.n(T),A=t(69),B=t.n(A),G=I.b.div(i||(i=Object(w.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    padding: 8px;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n"]))),K=I.b.div(a||(a=Object(w.a)(["\n    flex: 3;\n    padding-right: 1rem;\n"]))),W=I.b.div(s||(s=Object(w.a)(["\n    background-color: #2c2c2c;\n    border-radius: 8px;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n    \n"]))),Q=I.b.div(b||(b=Object(w.a)(["\n    flex: 1;\n    width: 100%;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 10px;\n    }\n    &::-webkit-scrollbar-track {\n        background: #2e2e2e;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: #575757;\n        border-radius: 10px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n        background: #787878;\n    }\n"]))),X=I.b.span(d||(d=Object(w.a)(["\n    color: white;\n    font-size: 2rem;\n    white-space: pre-wrap;\n    font-family: 'Cascadia Code', sans-serif;\n"]))),Y=I.b.div(l||(l=Object(w.a)(["\n    width: 100%;\n    background: #474747;\n    padding: 12px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-radius: 8px;\n    margin-top: 8px;\n"]))),Z=Object(I.b)(_.a)(u||(u=Object(w.a)(["\n    color: #ee5847;\n    margin-right: 8px;\n"]))),ee=Object(I.b)(B.a)(j||(j=Object(w.a)(["\n    color: #8b8b8b;\n    margin-left: 8px;\n    cursor: pointer;\n"]))),ne=I.b.div(x||(x=Object(w.a)(["\n    color: white;\n    flex: 1;\n"]))),te=function(e){var n=e.errorMessage,t=e.setIsError;return Object(E.jsxs)(Y,{children:[Object(E.jsx)(Z,{fontSize:"large"}),Object(E.jsx)(ne,{children:n}),Object(E.jsx)(ee,{onClick:function(){t(!1)}})]})},re=function(e){var n=e.codeValue,t=e.setCodeValue,r=e.outputValue,c=e.isError,o=e.setIsError,i=e.errorMessage;return Object(E.jsxs)(G,{children:[Object(E.jsx)(K,{children:Object(E.jsx)(N,{codeValue:n,setCodeValue:t})}),Object(E.jsxs)(W,{children:[Object(E.jsx)(Q,{children:Object(E.jsx)(X,{children:"".concat(r)})}),c&&Object(E.jsx)(te,{setIsError:o,errorMessage:i})]})]})},ce=t(70),oe=t.n(ce),ie=I.b.div(h||(h=Object(w.a)(["\n\tbackground-color: #252525;\n    border-radius: 20px;\n    width: 100%;\n    height: 100%;\n    box-shadow: rgba(26, 26, 26, 0.596) 4px 4px 10px;\n    display: flex;\n    flex-direction: column;\n"]))),ae=I.b.div(p||(p=Object(w.a)(["\n\twidth: 100%;\n    height: 70px;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    justify-content: space-between;\n    color: white;\n\tfont-family: 'Readex Pro', sans-serif;\n"]))),se=I.b.button(O||(O=Object(w.a)(["\n\tbackground-color: transparent;\n\tcolor: white;\n\toutline: none;\n\tborder: none;\n\tfont-size: 22px;\n    display: flex;\n    align-items: center;\n    padding: 0 24px;\n    border-radius: 0 20px 0 0;\n    cursor: pointer;\n\t&:hover{\n\t\tbackground-color: rgb(73, 73, 73);\n\t}\n"]))),be=I.b.div(f||(f=Object(w.a)(["\n\twidth: 100%;\n    flex: 1;\n\toverflow-y: hidden;\n\tpadding: 12px;\n"]))),de=function(){var e=Object(m.useState)(""),n=Object(C.a)(e,2),t=n[0],r=n[1],c=Object(m.useState)(""),o=Object(C.a)(c,2),i=o[0],a=o[1],s=Object(m.useState)(!1),b=Object(C.a)(s,2),d=b[0],l=b[1],u=Object(m.useState)(""),j=Object(C.a)(u,2),x=j[0],h=j[1];Object(m.useEffect)((function(){console.log(t)}),[t]);var p=function(){var e=Object(y.a)(k.a.mark((function e(){var n,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={code:t},e.next=3,oe.a.post("api/run",n);case 3:r=e.sent,c=r.data,console.log(c),"done"==c.status?(a(c.output),l(!1),h("")):(a("Oops!"),l(!0),h("Error: ".concat(c.message)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(ie,{children:[Object(E.jsxs)(ae,{children:[Object(E.jsx)(R,{}),Object(E.jsxs)(se,{onClick:function(){p()},children:[Object(E.jsx)(F.a,{}),"Run"]})]}),Object(E.jsx)(be,{children:Object(E.jsx)(re,{codeValue:t,setCodeValue:r,outputValue:i,isError:d,errorMessage:x,setIsError:l})})]})},le=I.b.div(g||(g=Object(w.a)(["\n    width: 100%;\n    height: 100vh;\n    background-color: #d8d8d8;\n    padding: 20px;\n"])));n.default=function(){return Object(E.jsx)(le,{children:Object(E.jsx)(de,{})})}}}]);
//# sourceMappingURL=4.7a8a9165.chunk.js.map