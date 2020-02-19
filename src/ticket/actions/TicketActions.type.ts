import {
    IGetTicketsStartAction,
    IGetTicketsSuccessAction,
    IGetTicketsFailureAction, IAddTicketAction,
} from './IGetTicketsActions.interface';

type TicketActions =
    IGetTicketsStartAction
    | IGetTicketsSuccessAction
    | IGetTicketsFailureAction
    | IAddTicketAction;

export default TicketActions;