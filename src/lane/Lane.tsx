import React from 'react';
import styled from 'styled-components';
import ILane from "./data/ILane.interface";
import TicketContainer from "../ticket/TicketContainer";

interface IProps {
    lane: ILane
}

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;
  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

export const TitleCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  color: #5d5d5d;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 5%;};
  }
`;

const Lane: React.FunctionComponent<IProps> = ({ lane }: IProps) => (
    <LaneWrapper>
        <TitleCard>
            {lane.name}
        </TitleCard>
        <TicketContainer lane_id={lane.id} />
    </LaneWrapper>
);

export default Lane;