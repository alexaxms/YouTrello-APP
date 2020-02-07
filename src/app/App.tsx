import * as React from 'react';
import GetTicketsMock from "../ticket/data/GetTicketsMock";
import styled, {createGlobalStyle} from 'styled-components';
import Lane from "../ticket/Lane";
import Header from "../header/Header";
import Ticket from "../ticket/Ticket";

// Business domain imports
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

const Container = styled.div`
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 2% 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const lanes = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Review' },
    { id: 4, title: 'Done' },
]

const App: React.SFC<{}> = () =>
    <>
        <GlobalStyle/>
        <AppWrapper>
            <Header/>
            <Container>
                {lanes.map(lane => <Lane title={lane.title} tickets={GetTicketsMock}/>)}
            </Container>

        </AppWrapper>
    </>;

export default App;