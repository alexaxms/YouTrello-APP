import React, {FormEvent, useEffect, useRef, useState} from "react";
import {useDrop} from "react-dnd";
import Loader from "./Loader";
import TicketList from "./TicketList";
import styled from "styled-components";
import TicketForm from "./TicketForm";
import {useDispatch, useSelector} from "react-redux";
import {getTicketsStartActionCreator} from "./actions/TicketActionCreators";
import {TitleCard} from "../lane/Lane";

interface IProps {
    lane_id: number,
}

const Container = styled.div`
  min-height: 40%;
`;

const TicketContainer: React.FunctionComponent<IProps> = ({lane_id}) => {
    const {tickets, isFetching} = useSelector((state: any) => state.ticketState);
    const [isCreating, setCreating] = useState(false);
    const dispatch = useDispatch();
    const handleOnClick = (e: FormEvent) => {
        e.preventDefault();
        setCreating(true);
    };
    useEffect(() => {
        dispatch(getTicketsStartActionCreator(lane_id));
    }, [dispatch, lane_id]);
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: "ticket",
        drop(item) {
            console.log(lane_id);
        }
    });
    drop(ref);
    return (<Container ref={ref}> {isFetching ? <Loader/> : (
        <TicketList tickets={tickets} lane_id={lane_id}/>)}
        {isCreating ? <TicketForm lane_id={lane_id}/> : <TitleCard>
            <button onClick={handleOnClick}>
               Add new
            </button>
        </TitleCard>}
    </Container>);
};

export default TicketContainer;