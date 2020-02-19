import TicketActionTypes from './TicketActionTypes.enum';
import {
    IGetTicketsStartAction,
    IGetTicketsSuccessAction,
    IGetTicketsFailureAction, IAddTicketAction,
} from './IGetTicketsActions.interface';
import ITicket from '../data/ITicket.interface';

export const getTicketsStartActionCreator = (lane_id: number): IGetTicketsStartAction => {
    return {
        type: TicketActionTypes.GET_TICKETS_START,
        lane_id,
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

export const addTicketActionCreator = (ticket: ITicket): IAddTicketAction => {
    return {
        type: "ADD_TICKET",
        isFetching: false,
        ticket,
    };
};