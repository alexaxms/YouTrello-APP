import ITicket from '../data/ITicket.interface';
import TicketActionTypes from "./TicketActionTypes.enum";

export interface ISetTicketAction {
    type: TicketActionTypes.SET_TICKET,
    ticket: ITicket,
    isFetching: false,
}

export interface ISearchTicketsAction {
    type: TicketActionTypes.SEARCH_TICKETS,
    term: string,
    isFetching: true,
}

export interface IGetTicketsStartAction {
    type: TicketActionTypes.GET_TICKETS_START,
    isFetching: true,
}
export interface IGetTicketsSuccessAction {
    type: TicketActionTypes.GET_TICKETS_SUCCESS,
    tickets: ITicket[],
    isFetching: false,
}
export interface IGetTicketsFailureAction {
    type: TicketActionTypes.GET_TICKETS_FAILURE,
    isFetching: false,
}