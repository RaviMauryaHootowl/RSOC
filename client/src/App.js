import {lazy, Suspense} from 'react';
import GlobalStyle from './GlobalStyle.style';
import styled from "styled-components";
import RSOCLogo from './components/Logo/logo.svg'
// import Home from './pages/Home/Home';

const HomeComp = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <div className="App">
		<GlobalStyle />
		<Suspense fallback={""}>
			<HomeComp/>
		</Suspense>
		</div>
	);
}

const LogoImage = styled.img`
    height: 50px;
    margin-right: 12px;
`;

const LoadingLogo = () => {
	return <LogoImage src={RSOCLogo} />
}

export default App;
