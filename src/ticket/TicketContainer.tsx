import React from "react";
import Loader from "./Loader";
import {
    getTicketsStartActionCreator,
} from "./actions/TicketActionCreators";
import {useDispatch, useSelector} from "react-redux";
import TicketList from "./TicketList";

interface IProps {
    lane_id: number,
}

const TicketContainer: React.FunctionComponent<IProps> = ({lane_id}) => {
    const dispatch = useDispatch();
    const  {tickets , isFetching }  = useSelector((state: any) => state.ticketState);
    React.useEffect(() => {
        dispatch(getTicketsStartActionCreator(lane_id));
    }, [dispatch]);

    return (<>{isFetching ? <Loader/> : (<TicketList tickets = {tickets} lane_id = {lane_id}/>)}</>);
};

export default TicketContainer;