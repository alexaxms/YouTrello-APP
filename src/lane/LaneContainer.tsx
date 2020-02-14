import React from "react";
import { useDispatch, useSelector} from "react-redux";
import Loader from "../ticket/Loader";
import {getLanesStartActionCreator} from "./actions/LaneActionCreators";
import LaneList from "./LaneList";

const LaneContainer = () => {
    const dispatch = useDispatch();
    const  {lanes , isFetching }  = useSelector((state: any) => state.laneState);

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