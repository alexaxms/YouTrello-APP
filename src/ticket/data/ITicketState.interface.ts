import ITicket from "./ITicket.interface";

export default interface ITicketState {
    readonly ticket?: ITicket,
    readonly tickets: ITicket[],
    readonly isFetching: Boolean,
}