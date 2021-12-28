import React, {useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import styled, {keyframes} from 'styled-components';
import Tutorial from '../../components/Tutorial/Tutorial';
import { useTransition, animated } from 'react-spring';

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #d8d8d8;
    padding: 20px;
    position: relative;
`; 

const TutorialSidePanel = styled(animated.div)`
    background-color: #313131;
    position: absolute;
    width: 40%;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: #35353540 -2px 0px 20px;
    border-left: 6px solid #5c5c5c;
`;



const Home = () => {

    const [isTutOpen, setIsTutOpen] = useState(false);
    const transition = useTransition(isTutOpen, {
        from: {
            x: 250,
            y: 0,
            opacity: 0
        },
        enter: {
            x: 0,
            y: 0,
            opacity: 1
        },
        leave: {
            x: 250,
            y: 0,
            opacity: 0
        },
    });

    return (
        <HomeContainer>
            <CodeEditor setIsTutOpen={setIsTutOpen}/>
            {transition((style, item) => 
                item && <TutorialSidePanel style={style}>
                    <Tutorial setIsTutOpen={setIsTutOpen}/>
                </TutorialSidePanel> 
            )}
        </HomeContainer>
    );
}

export default Home;