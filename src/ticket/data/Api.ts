import axios from "axios";

const baseUrl = 'http://localhost:3001/boards/1/lanes/1/';

export const getTicketsFromApi = (): Promise<any> => {
    return axios.get(`${baseUrl}/tickets/`);
};

export const searchTicketsFromApi = (term: String): Promise<any> => {
    return axios.get(`${baseUrl}/tickets/?search=${term}`);
};