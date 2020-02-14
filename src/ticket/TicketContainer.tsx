import ITicket from "./data/ITicket.interface";
import React from "react";
import Loader from "./Loader";
import IAppState from "./store/IAppState.interface";
import {
    getTicketsStartActionCreator,
} from "./actions/TicketActionCreators";
import {connect} from "react-redux";
import TicketList from "./TicketList";

interface IProps {
    getTickets: Function,
    lane_id: number,
    tickets: ITicket[],
    isFetching: Boolean
}

const TicketContainer: React.FunctionComponent<IProps> = ({
                                                    getTickets,
                                                    lane_id,
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
        tickets: store.ticketState.tickets,
        isFetching: store.ticketState.isFetching,
    };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
    return {
        getTickets: () => dispatch(getTicketsStartActionCreator()),
    }
};

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);