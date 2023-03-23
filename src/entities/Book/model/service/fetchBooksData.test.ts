import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Book } from 'entities/Book/model/types/book';
import { fetchBookDetails } from './fetchBookDetails';

jest.mock('axios');
const books: Book[] = [{
    etag: 'etag',
    volumeInfo: {
        description: 'description',
    },
    id: 'id',
    kind: 'kind',
    selfLink: 'selfLink',
}];

describe('fetchBookDetails.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchBookDetails);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: books }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(books);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchBookDetails);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
