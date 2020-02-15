import ILane from "./ILane.interface";
import GetLaneMock from "./GetLaneMock";

export function GetLanesMock() {
    return [{
        id: 1,
        name: 'To do'},{
        id: 2,
        name: 'Doing'},{
        id: 3,
        name: 'QA'},{
        id: 4,
        name: 'Done'},
    ];
}