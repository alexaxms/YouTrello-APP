import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from "../header/Header";
import Board from "../board/Board";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App: React.SFC<{}> = () =>
        <>
            <GlobalStyle/>
            <AppWrapper>
                <Header/>
                <Board/>
            </AppWrapper>
        </>;

export default App