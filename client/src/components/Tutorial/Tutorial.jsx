import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const TutorialContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px;
    font-family: 'Readex Pro', sans-serif;
    overflow-y: auto;
`;

const HeaderRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CloseBtn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: white;
`;

const HeaderText = styled.div`
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
`;

const SubHeaderText = styled.div`
    font-size: 1.6rem;
    color: #ffbc51;
    margin-bottom: 6px;
`;

const FormattedText = styled.div`
    font-size: 1.1rem;
    color: white;
`;

const VerticalSpace = styled.div`
    height: 16px;
`;

const CodeBlockContainer = styled.div`
    width: 100%;
    margin: 6px 0;
    
`;

const CodeBlockDisplay = styled.div`
    background-color: #111111;
    color: #bcffc1;
    padding: 6px;
    border-radius: 6px;
`;

const Tutorial = ({setIsTutOpen}) => {
    return (
        <TutorialContainer>
            <HeaderRow>
                <HeaderText>R.S.O.C. Tutorial</HeaderText>
                <CloseBtn onClick={() => {setIsTutOpen(false);}}>
                    <CloseIcon/>
                </CloseBtn>
            </HeaderRow>
            <SubHeaderText>Architecture</SubHeaderText>
            <FormattedText>
            <li>R.S.O.C. comes with a memory size of 65536 locations and 7 Registers(A-G)</li>
            <li>Memory is represented within M() Eg. M(2000H)</li>
            <li>This denotes memory location with hex index of 2000</li>
            <li>Registers are represented by their letter which ranges from A to G</li>
            </FormattedText>
            <VerticalSpace/>
            <SubHeaderText>Instruction Set</SubHeaderText>
            <InstructionSet 
                title={
                    <>1. SET : Used to set a memory or register from another memory, register or data.</>
                }
                code={
                    <>
                    SET A, B<br/>
                    SET A, 20<br/>
                    SET M(2001H), 40<br/>
                    </>
                }
            />
            <InstructionSet 
                title={
                    <>2. SHOW: Used to print the value of a memory or register.</>
                }
                code={
                    <>
                    SHOW A<br/>
                    SHOW M(2000H)
                    </>
                }
            />
            <InstructionSet 
                title={
                    <>3. SKIP: Empty and Useless line just like your life (jk)</>
                }
                code={
                    <>
                    SKIP
                    </>
                }
            />
            <InstructionSet 
                title={
                    <>4. ADD, SUB, MUL, DIV: Performs arithmetics on two numbers and stores into A Register (Accumulator)</>
                }
                code={
                    <>
                    ADD A, B<br/>
                    ADD C, M(2000H)<br/>
                    ADD 30, 40<br/>
                    SUB A, B<br/>
                    MUL B, C<br/>
                    DIV C, D
                    </>
                }
            />
            <InstructionSet 
                title={
                    <>5. INR/DCR: Used to Increment or Decrement value</>
                }
                code={
                    <>
                    INR A<br/>
                    DCR M(1000H)
                    </>
                }
            />
            <InstructionSet 
                title={
                    <>6. IFG: If greater conditional jump to a label.<br/>
                    Eg. Here since A is greater than 10 it jumps to jumptag label<br/>
                    Similarly, IFL: If Less, IFE: If Equal, IFN: If Not Equal</>
                }
                code={
                    <>
                    SET A, 20<br/>
                    IFG A, 10, jumptag<br/>
                    ...<br/>
                    ...<br/>
                    SHOW A : jumptag<br/>
                    </>
                }
            />
            <InstructionSet 
                title={
                    <>7. Comments: These are represented by ~ (tilde) symbol which is also the logo of R.S.O.C.</>
                }
                code={
                    <>
                    SET A, 20<br/>
                    ~ This is a comment line<br/>
                    SHOW A
                    </>
                }
            />
            
        </TutorialContainer>
    );
}

const InstructionSet = ({title, code}) => {
    return (
        <>
            <FormattedText>
                {title}
            </FormattedText>
            <CodeBlock>
                {code}
            </CodeBlock>
            <VerticalSpace/>
        </>
    );
}

const CodeBlock = ({children}) => {
    return (
        <CodeBlockContainer>
            <CodeBlockDisplay>{children}</CodeBlockDisplay>
        </CodeBlockContainer>
    );
}

export default Tutorial;