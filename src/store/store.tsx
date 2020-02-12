// Third-Party dependencies
import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';

// React Sagas
import createSagaMiddleware from 'redux-saga';

// Chrome Dev Tools
import {composeWithDevTools} from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import TicketReducer from '../ticket/reducer/TicketReducer';
import {ticketsSaga} from '../ticket/sagas/Ticket';
import LaneReducer from "../lane/reducer/LaneReducer";
import {lanesSaga} from "../lane/sagas/Lane";

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    ticketState: TicketReducer,
    laneState: LaneReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
    const store = createStore(
        rootReducer,
        undefined,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(ticketsSaga);
    sagaMiddleware.run(lanesSaga);

    return store;
}