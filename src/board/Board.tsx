import * as React from 'react';
import styled from 'styled-components';
import LaneContainer from "../lane/LaneContainer";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

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

const Board: React.FC<{}> = () => <Container><DndProvider backend={Backend}><LaneContainer/> </DndProvider></Container>;

export default Board;