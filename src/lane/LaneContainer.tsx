import React, {useState} from "react";
import LaneList from "./LaneList";
import {GetLanesMock} from "./data/GetLanesMock";


const data = GetLanesMock();

const LaneContainer = () => {
    const [lanes, setLanes] = useState(data);
    return (
        <>
            {<LaneList lanes={lanes}/>}
        </>
    );
};


export default LaneContainer;