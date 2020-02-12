import ITicketState from "../ticket/data/ITicketState.interface";
import ILaneState from "../lane/data/ILaneState.interface";

export default interface IAppState {
    ticketState: ITicketState,
    laneState: ILaneState;
}