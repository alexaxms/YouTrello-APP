import { Reducer } from 'redux';

import LaneActions from '../actions/LaneActions.type';
import LaneActionTypes from '../actions/LaneActionTypes.enum';
import ILaneState from '../data/ILaneState.interface';

const initialLaneState: ILaneState = {
    lane: undefined,
    lanes: [],
    isFetching: false,
};

const LaneReducer: Reducer<ILaneState, LaneActions> = (
    state = initialLaneState,
    action
) => {
    switch (action.type) {
        case LaneActionTypes.GET_LANES_START: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case LaneActionTypes.GET_LANES_SUCCESS: {
            return {
                ...state,
                lanes: action.lanes,
                isFetching: action.isFetching,
            };
        }
        case LaneActionTypes.GET_LANES_FAILURE: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        default:
            return state;
    }
};

export default LaneReducer;