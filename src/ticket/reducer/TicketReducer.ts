import { Reducer } from 'redux';

import TicketActions from '../actions/TicketActions.type';
import TicketActionTypes from '../actions/TicketActionTypes.enum';
import ITicketState from '../data/ITicketState.interface';

const initialTicketState: ITicketState = {
    tickets: [],
    isFetching: false,
};

const TicketReducer: Reducer<ITicketState, TicketActions> = (
    state = initialTicketState,
    action
) => {
    switch (action.type) {
        case TicketActionTypes.GET_TICKETS_START: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case TicketActionTypes.GET_TICKETS_SUCCESS: {
            return {
                ...state,
                tickets: action.tickets,
                isFetching: action.isFetching,
            };
        }
        case TicketActionTypes.GET_TICKETS_FAILURE: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        default:
            return state;
    }
};

export default TicketReducer;