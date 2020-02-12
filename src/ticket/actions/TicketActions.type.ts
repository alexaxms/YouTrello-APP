import {
    ISetTicketAction,
    ISearchTicketsAction,
    IGetTicketsStartAction,
    IGetTicketsSuccessAction,
    IGetTicketsFailureAction
} from './IGetTicketsActions.interface';

type TicketActions =
    ISetTicketAction
    | ISearchTicketsAction
    | IGetTicketsStartAction
    | IGetTicketsSuccessAction
    | IGetTicketsFailureAction;

export default TicketActions;