import TicketActionTypes from './TicketActionTypes.enum';
import {
    ISetTicketAction,
    IGetTicketsStartAction,
    IGetTicketsSuccessAction,
    IGetTicketsFailureAction,
    ISearchTicketsAction
} from './IGetTicketsActions.interface';
import ITicket from '../data/ITicket.interface';

export const setTicketActionCreator = (ticket: ITicket): ISetTicketAction => {
    return {
        type: TicketActionTypes.SET_TICKET,
        ticket: ticket,
        isFetching: false,
    };
};

export const searchTicketsActionCreator = (term: string): ISearchTicketsAction => {
    return {
        type: TicketActionTypes.SEARCH_TICKETS,
        term,
        isFetching: true,
    };
};

export const getTicketsStartActionCreator = (): IGetTicketsStartAction => {
    return {
        type: TicketActionTypes.GET_TICKETS_START,
        isFetching: true,
    };
};

export const getTicketsSuccessActionCreator = (tickets: ITicket[]): IGetTicketsSuccessAction => {
    return {
        type: TicketActionTypes.GET_TICKETS_SUCCESS,
        tickets,
        isFetching: false,
    };
};

export const getTicketsFailureActionCreator = (): IGetTicketsFailureAction => {
    return {
        type: TicketActionTypes.GET_TICKETS_FAILURE,
        isFetching: false,
    };
};