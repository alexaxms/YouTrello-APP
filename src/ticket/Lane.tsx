import React from 'react';
import styled from 'styled-components';
import ITicket from "./data/ITicket.interface";
import Ticket from "./Ticket";

interface IProps {
    tickets: ITicket[]
    title: string
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

const TitleCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  color: #5d5d5d;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 5%;};
  }
`;

const TicketsWrapper = styled.div`
  padding: 0%;
`;

const Alert = styled.div`
  text-align: center;
`;

const Lane: React.FunctionComponent<IProps> = ({tickets, title}: IProps) => (
    <LaneWrapper>
        <TitleCard>
            {title}
        </TitleCard>
        <TicketsWrapper>
            {tickets.map(ticket => <Ticket ticket={ticket}/>)}
        </TicketsWrapper>
    </LaneWrapper>
);

export default Lane;