import axios from 'axios';
import {
    getTicketsFromApi,
} from './Api';

// Tests
describe('getTickets', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    });

    describe('getTickets', () => {
        it('httpClient is called as expected', () => {
            getTicketsFromApi(1);
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/boards/1/lanes/1/tickets');
        });
    });

});