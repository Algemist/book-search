import { fetchBooksData } from '../service/fetchBooksData';
import { BookReducer } from './BookSlice';
import { BooksSchema } from '../types/BooksSchema';

const data = [
    {
        etag: 'etag',
        volumeInfo: {},
        id: 'id',
        kind: 'kind',
        selfLink: 'link',
    },
];

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
    // test('test fetchBooksData fullfiled', () => {
    //     const state: DeepPartial<BooksSchema> = {
    //         isLoading: true,
    //     };
    //     expect(BookReducer(state as BooksSchema, fetchBooksData.fulfilled)).toEqual({
    //         isLoading: false,
    //         error: undefined,
    //         data,
    //     });
    // });
});
