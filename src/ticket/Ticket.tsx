import * as React from 'react';
import ITicket from "./data/ITicket.interface";
import styled from 'styled-components';

interface IProps {
    ticket: ITicket
}

const TicketWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: 1%};
  }
`;
const Title = styled.h4`
  width: 100%;
  margin: 0px;
  color: #5d5d5d;
`;

const Body = styled.p`
  width: 100%;
  color: #8d8d8d;
`;

const Ticket: React.FunctionComponent<IProps> = ({ticket}: IProps) => (
    <TicketWrapper>
        <Title>{ticket.title}</Title>
        <hr/>
        <Body>{ticket.description}</Body>
    </TicketWrapper>
);

export default Ticket;