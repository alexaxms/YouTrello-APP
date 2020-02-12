import LaneActionTypes from './LaneActionTypes.enum';
import {
    IGetLanesStartAction,
    IGetLanesSuccessAction,
    IGetLanesFailureAction
} from './IGetLanesActions.interface';
import ILane from '../data/ILane.interface';

export const getLanesStartActionCreator = (): IGetLanesStartAction => {
    return {
        type: LaneActionTypes.GET_LANES_START,
        isFetching: true,
    };
};

export const getLanesSuccessActionCreator = (lanes: ILane[]): IGetLanesSuccessAction => {
    return {
        type: LaneActionTypes.GET_LANES_SUCCESS,
        lanes,
        isFetching: false,
    };
};

export const getLanesFailureActionCreator = (): IGetLanesFailureAction => {
    return {
        type: LaneActionTypes.GET_LANES_FAILURE,
        isFetching: false,
    };
};