import {call, put, takeEvery, all} from 'redux-saga/effects';

import {
    getLanesFromApi,
} from '../data/Api';


import LaneActionTypes from "../actions/LaneActionTypes.enum";
import {getLanesFailureActionCreator, getLanesSuccessActionCreator} from "../actions/LaneActionCreators";


export function* getLanesSaga(): any {
    try {
        const response = yield call(getLanesFromApi);
        const lanes = response.data;
        yield put(getLanesSuccessActionCreator(lanes))
    } catch (e) {
        yield put(getLanesFailureActionCreator());
    }
}

export function* lanesSaga() {
    yield all([
        takeEvery(LaneActionTypes.GET_LANES_START, getLanesSaga),
    ]);
}