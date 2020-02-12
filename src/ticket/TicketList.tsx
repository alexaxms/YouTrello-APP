import React from "react";
import ITicket from "./data/ITicket.interface";
import Ticket from "./Ticket";

interface IProps {
    tickets: ITicket[],
    lane_id: number
}

const TicketList: React.FunctionComponent<IProps> = ({ tickets , lane_id}) => (
    <>
        {tickets.filter(ticket => ticket.lane_id === lane_id).map(ticket => (
            <Ticket key={ticket.id} ticket={ticket}/>
        ))}
    </>
);

export default TicketList;