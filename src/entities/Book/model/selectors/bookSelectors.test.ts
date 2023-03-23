import { StateSchema } from 'app/providers/StoreProvider';
import {
    getBookDetails, getBooksData, getBooksError, getBooksIsLoading, getBooksTotalItems,
} from './bookselectors';

describe('bookSelectors.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            books: {
                isLoading: true,
            },
        };
        expect(getBooksIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return totalItems', () => {
        const state: DeepPartial<StateSchema> = {
            books: {
                totalItems: 42,
            },
        };
        expect(getBooksTotalItems(state as StateSchema)).toEqual(42);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            books: {
                error: 'error',
            },
        };
        expect(getBooksError(state as StateSchema)).toEqual('error');
    });
    test('should return books details info', () => {
        const state: DeepPartial<StateSchema> = {
            books: {
                detailBook: {
                    kind: 'kind',
                    selfLink: 'link',
                    id: 'id',
                    etag: 'etag',
                    volumeInfo: {},
                },
            },
        };
        expect(getBookDetails(state as StateSchema)).toEqual({
            kind: 'kind',
            selfLink: 'link',
            id: 'id',
            etag: 'etag',
            volumeInfo: {},
        });
    });
    test('should return books details info', () => {
        const state: DeepPartial<StateSchema> = {
            books: {
                data: [
                    {
                        kind: 'kind',
                        selfLink: 'link',
                        id: 'id',
                        etag: 'etag',
                        volumeInfo: {},
                    },
                ],
            },
        };
        expect(getBooksData(state as StateSchema)).toEqual([{
            kind: 'kind',
            selfLink: 'link',
            id: 'id',
            etag: 'etag',
            volumeInfo: {},
        }]);
    });
});
