import TicketActionTypes from './TicketActionTypes.enum';
import {
    IGetTicketsStartAction,
    IGetTicketsSuccessAction,
    IGetTicketsFailureAction,
} from './IGetTicketsActions.interface';
import ITicket from '../data/ITicket.interface';

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