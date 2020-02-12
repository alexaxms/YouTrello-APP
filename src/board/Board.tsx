import * as React from 'react';
import styled from 'styled-components';
import LaneContainer from "../lane/LaneContainer";

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

const Board: React.FC<{}> = () => <Container><LaneContainer/> </Container>;

export default Board;