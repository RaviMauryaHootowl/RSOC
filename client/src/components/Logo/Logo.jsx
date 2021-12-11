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

const Logo = () => {
    return (
        <AppLogo>
            <LogoImage src={RSOCLogo} />
            R. S. O. C.
        </AppLogo>
    );
}

export default Logo;
