import ITicket from "./ITicket.interface";

export default interface ITicketState {
    readonly tickets: ITicket[],
    readonly isFetching: Boolean,
}