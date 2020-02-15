import {
    IGetTicketsStartAction,
    IGetTicketsSuccessAction,
    IGetTicketsFailureAction,
} from './IGetTicketsActions.interface';

type TicketActions =
    IGetTicketsStartAction
    | IGetTicketsSuccessAction
    | IGetTicketsFailureAction;

export default TicketActions;