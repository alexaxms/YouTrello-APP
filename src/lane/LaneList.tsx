import React from "react";
import ILane from "./data/ILane.interface";
import Lane from "./Lane";

interface IProps {
    lanes: ILane[]
}

const LaneList: React.FunctionComponent<IProps> = ({ lanes }) => (
    <>
        {lanes.map(lane => (
            <Lane key={lane.id} lane={lane}/>
        ))}
    </>
);

export default LaneList;