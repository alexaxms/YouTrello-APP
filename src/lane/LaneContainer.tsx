import React from "react";
import LaneList from "./LaneList";
import {useDispatch, useSelector} from "react-redux";
import {getLanesStartActionCreator} from "./actions/LaneActionCreators";
import Loader from "../ticket/Loader";


const LaneContainer = () => {
    const dispatch = useDispatch();
    const {lanes, isFetching} = useSelector((state: any) => state.laneState);
    React.useEffect(() => {
        dispatch(getLanesStartActionCreator());
    }, [dispatch]);
    return (
        <>
            {isFetching ? <Loader/> : <LaneList lanes={lanes}/>}
        </>
    );
};


export default LaneContainer;