import ITicket from "./data/ITicket.interface";
import React from "react";
import Loader from "./Loader";
import IAppState from "./store/IAppState.interface";
import {
    getTicketsStartActionCreator,
    searchTicketsActionCreator,
    setTicketActionCreator
} from "./actions/TicketActionCreators";
import {connect} from "react-redux";
import TicketList from "./TicketList";

interface IProps {
    getTickets: Function,
    setTicket: Function,
    searchTickets: Function,
    lane_id: number,
    ticket: any,
    tickets: ITicket[],
    isFetching: Boolean
}

const TicketContainer: React.FunctionComponent<IProps> = ({
                                                    getTickets,
                                                    setTicket,
                                                    searchTickets,
                                                    lane_id,
                                                    ticket,
                                                    tickets,
                                                    isFetching
                                                }) => {
    React.useEffect(() => {
        getTickets();
    }, [getTickets]);

    return (<>
            {isFetching
                ? <Loader/>
                : (
                    <TicketList tickets = {tickets} lane_id = {lane_id}/>
                )
            }
        </>
    );
};

// Make data available on props
const mapStateToProps = (store: IAppState) => {
    return {
        ticket: store.ticketState.ticket,
        tickets: store.ticketState.tickets,
        isFetching: store.ticketState.isFetching,
    };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
    return {
        getTickets: () => dispatch(getTicketsStartActionCreator()),
        setTicket: (ticket: any) => dispatch(setTicketActionCreator(ticket)),
        searchTickets: (term: string) => dispatch(searchTicketsActionCreator(term)),
    }
};

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);