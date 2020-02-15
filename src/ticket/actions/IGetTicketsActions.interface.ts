import ITicket from '../data/ITicket.interface';
import TicketActionTypes from "./TicketActionTypes.enum";

export interface IGetTicketsStartAction {
    type: TicketActionTypes.GET_TICKETS_START,
    lane_id: number,
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