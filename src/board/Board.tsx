import * as React from 'react';
import styled from 'styled-components';
import Lane from "../ticket/Lane";
import ITicket from "../ticket/data/ITicket.interface";
import {connect} from "react-redux";
import IAppState from "../ticket/store/IAppState.interface";
import {
    getTicketsStartActionCreator,
    searchTicketsActionCreator,
    setTicketActionCreator
} from "../ticket/actions/TicketActionCreators";
import Loader from "../ticket/Loader";

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

interface IProps {
    getTickets: Function,
    setTicket: Function,
    searchTickets: Function,
    ticket: any,
    tickets: ITicket[],
    isFetching: Boolean
}

const lanes = [
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In Progress'},
    {id: 3, title: 'Review'},
    {id: 4, title: 'Done'},
]

const Board: React.FunctionComponent<IProps> = ({
                                                  getTickets,
                                                  setTicket,
                                                  searchTickets,
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
                    <Container>
                        {lanes.map(lane => <Lane key={lane.id} title={lane.title} tickets={tickets}/>)}
                    </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Board);