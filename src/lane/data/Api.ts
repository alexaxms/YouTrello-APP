import axios from "axios";

const baseUrl = 'http://localhost:3001/boards/1/';

export const getLanesFromApi = (): Promise<any> => {
    return axios.get(`${baseUrl}/lanes/`);
};
