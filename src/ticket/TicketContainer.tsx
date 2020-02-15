import React, {useRef, useState} from "react";
import {useDrop} from "react-dnd";
import Loader from "./Loader";
import TicketList from "./TicketList";
import styled from "styled-components";
import {GetTicketsMock} from "./data/GetTicketsMock";
import TicketForm from "./TicketForm";

interface IProps {
    lane_id: number,
}

const Container = styled.div`
  min-height: 40%;
`;
const data = GetTicketsMock();
const TicketContainer: React.FunctionComponent<IProps> = ({lane_id}) => {
    const [tickets, setTickets] = useState(data);
    const [isFetching, setFetching] = useState(false);

    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: "ticket",
        drop(item) {
            console.log(lane_id);
        }
    });
    drop(ref);
    return <Container ref={ref}> {isFetching ? <Loader/> : (
        <TicketList tickets={tickets} lane_id={lane_id}/>)}<TicketForm lane_id={lane_id}/></Container>;
};

export default TicketContainer;