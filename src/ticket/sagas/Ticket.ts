import {call, put, takeEvery, all} from 'redux-saga/effects';

import {
    getTicketsFromApi,
    searchTicketsFromApi,
} from '../data/Api';


import TicketActionTypes from "../actions/TicketActionTypes.enum";
import {ISearchTicketsAction} from "../actions/IGetTicketsActions.interface";
import {getTicketsFailureActionCreator, getTicketsSuccessActionCreator} from "../actions/TicketActionCreators";


export function* getTicketsSaga(): any {
    try {
        const response = yield call(getTicketsFromApi);
        const tickets = response.data;
        yield put(getTicketsSuccessActionCreator(tickets))
    } catch (e) {
        yield put(getTicketsFailureActionCreator());
    }
}

export function* searchTicketsSaga(action: ISearchTicketsAction): any {
    try {
        const response = yield call(searchTicketsFromApi, action.term);
        const tickets = response.data.results;
        yield put(getTicketsSuccessActionCreator(tickets))
    } catch (e) {
        yield put(getTicketsFailureActionCreator());
    }
};

export function* ticketsSaga() {
    yield all([
        takeEvery(TicketActionTypes.GET_TICKETS_START, getTicketsSaga),
        takeEvery(TicketActionTypes.SEARCH_TICKETS, searchTicketsSaga)
    ]);
}