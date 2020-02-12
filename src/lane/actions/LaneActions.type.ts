import {
    IGetLanesStartAction,
    IGetLanesSuccessAction,
    IGetLanesFailureAction
} from './IGetLanesActions.interface';

type LaneActions =
    | IGetLanesStartAction
    | IGetLanesSuccessAction
    | IGetLanesFailureAction;

export default LaneActions;