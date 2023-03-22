import { Sort } from 'entities/Sort';
import { Categories } from 'entities/Categories';
import { SearchBookActions, SearchBookReducer } from './SearchBookSlice';
import { SearchBookSchema } from '../types/searchBook';

describe('BookSlice.test', () => {
    test('should change value state', () => {
        const state: DeepPartial<SearchBookSchema> = {
            value: 'value1',
        };
        expect(SearchBookReducer(state as SearchBookSchema, SearchBookActions.setValue('value2'))).toEqual({
            value: 'value2',
        });
    });
    test('should change sort state', () => {
        const state: DeepPartial<SearchBookSchema> = {
            sort: Sort.RELEVANCE,
        };
        expect(SearchBookReducer(state as SearchBookSchema, SearchBookActions.setSort(Sort.NEWEST))).toEqual({
            sort: Sort.NEWEST,
        });
    });
    test('should change category state', () => {
        const state: DeepPartial<SearchBookSchema> = {
            categories: Categories.ALL,
        };
        expect(SearchBookReducer(state as SearchBookSchema, SearchBookActions.setCategory(Categories.BIOGRAPHY))).toEqual({
            categories: Categories.BIOGRAPHY,
        });
    });
});
