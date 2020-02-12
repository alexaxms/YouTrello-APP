import ILane from '../data/ILane.interface';
import LaneActionTypes from "./LaneActionTypes.enum";


export interface IGetLanesStartAction {
    type: LaneActionTypes.GET_LANES_START,
    isFetching: true,
}
export interface IGetLanesSuccessAction {
    type: LaneActionTypes.GET_LANES_SUCCESS,
    lanes: ILane[],
    isFetching: false,
}
export interface IGetLanesFailureAction {
    type: LaneActionTypes.GET_LANES_FAILURE,
    isFetching: false,
}