import React from "react";
import styled from "styled-components";
import RSOCLogo from './logo.svg'

const AppLogo = styled.div`
	font-size: 22px;
    display: flex;
    align-items: center;
    padding: 0 24px;
`;

const LogoImage = styled.img`
    height: 36px;
    margin-right: 12px;
`;

const LogoText = styled.span`
	@media(max-width: 600px){
		display: none;
	}
`;

const Logo = () => {
    return (
        <AppLogo>
            <LogoImage src={RSOCLogo} />
            <LogoText>R. S. O. C.</LogoText>
        </AppLogo>
    );
}

export default Logo;
