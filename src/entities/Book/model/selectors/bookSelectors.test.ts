import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getBooksIsLoading } from './bookselectors';

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
        expect(getBooksIsLoading(state as StateSchema)).toEqual(42);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            books: {
                error: 'error',
            },
        };
        expect(getBooksIsLoading(state as StateSchema)).toEqual('error');
    });
});
