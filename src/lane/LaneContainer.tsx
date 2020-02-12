import React from "react";
import IAppState from "../lane/store/IAppState.interface";
import {connect} from "react-redux";
import ILane from "./data/ILane.interface";
import Loader from "../ticket/Loader";
import {getLanesStartActionCreator} from "./actions/LaneActionCreators";
import LaneList from "./LaneList";

interface IProps {
    getLanes: Function,
    lanes: ILane[],
    isFetching: Boolean
}

const LaneContainer: React.FunctionComponent<IProps> = ({getLanes, lanes, isFetching}) => {
    React.useEffect(() => {
        getLanes();
    }, [getLanes]);

    return (
        <>
            {isFetching ? <Loader/> : <LaneList lanes={lanes}/>}
        </>
    );
};

// Make data available on props
const mapStateToProps = (store: IAppState) => {
    return {
        lanes: store.laneState.lanes,
        isFetching: store.laneState.isFetching,
    };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
    return {
        getLanes: () => dispatch(getLanesStartActionCreator()),
    }
};

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(LaneContainer);