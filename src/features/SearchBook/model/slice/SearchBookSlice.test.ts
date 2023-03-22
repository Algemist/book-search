import { SearchBookActions, SearchBookReducer } from './SearchBookSlice';
import { SearchBookSchema } from '../types/searchBook';

describe('BookSlice.test', () => {
    test('test fetchBooksData pending', () => {
        const state: DeepPartial<SearchBookSchema> = {
            value: 'value1',
        };
        expect(SearchBookReducer(state as SearchBookSchema, SearchBookActions.setValue('value2'))).toEqual({
            value: 'value2',
        });
    });
});
