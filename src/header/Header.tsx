import * as React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 1%;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header: React.FunctionComponent = () => (
    <HeaderWrapper>
        <Title>
            rránkIhmY del Boom
        </Title>
    </HeaderWrapper>
);

export default Header;