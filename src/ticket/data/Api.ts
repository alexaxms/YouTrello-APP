import axios from "axios";

const baseUrl = 'http://localhost:3001/boards/1/lanes/';

export const getTicketsFromApi = (id: number): Promise<any> => {
    return axios.get(`${baseUrl}${id}/tickets/`);
};
