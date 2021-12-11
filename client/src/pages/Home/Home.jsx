import react from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import styled from 'styled-components';

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #d8d8d8;
    padding: 20px;
`; 

const Home = () => {
    return (
        <HomeContainer>
            <CodeEditor />
        </HomeContainer>
    );
}

export default Home;