import { fetchBooksData } from '../service/fetchBooksData';
import { BookReducer } from './BookSlice';
import { BooksSchema } from '../types/BooksSchema';

describe('BookSlice.test', () => {
    test('test fetchBooksData pending', () => {
        const state: DeepPartial<BooksSchema> = {
            isLoading: false,
        };
        expect(BookReducer(state as BooksSchema, fetchBooksData.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
});
