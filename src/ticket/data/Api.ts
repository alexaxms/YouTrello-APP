import axios from "axios";

const baseUrl = 'http://localhost:3001';

export const getTicketsFromApi = (): Promise<any> => {
    return axios.get(`${baseUrl}/tickets/`);
};
