import ILane from "./ILane.interface";

export default interface ILaneState {
    readonly lane?: ILane,
    readonly lanes: ILane[],
    readonly isFetching: Boolean,
}