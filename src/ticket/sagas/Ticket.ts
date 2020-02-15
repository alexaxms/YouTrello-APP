import {call, put, takeEvery, all} from 'redux-saga/effects';

import {
    getTicketsFromApi,
} from '../data/Api';


import TicketActionTypes from "../actions/TicketActionTypes.enum";
import {getTicketsFailureActionCreator, getTicketsSuccessActionCreator} from "../actions/TicketActionCreators";
import {IGetTicketsStartAction} from "../actions/IGetTicketsActions.interface";


export function* getTicketsSaga(action: IGetTicketsStartAction): any {
    try {
        const response = yield call(getTicketsFromApi, action.lane_id);
        const tickets = response.data;
        yield put(getTicketsSuccessActionCreator(tickets))
    } catch (e) {
        yield put(getTicketsFailureActionCreator());
    }
}

export function* ticketsSaga() {
    yield all([
        takeEvery(TicketActionTypes.GET_TICKETS_START, getTicketsSaga),
    ]);
}