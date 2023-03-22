import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
// import { Sort } from 'entities/Sort';
import { Categories } from 'entities/Categories';
import { getSearchBookValue } from './searchBookSelectors';

describe('searchBookSelectors.test', () => {
    // test('should return sort', () => {
    //     const state: DeepPartial<StateSchema> = {
    //         searchBook: {
    //             sort: Sort.RELEVANCE,
    //         },
    //     };
    //     expect(getSearchBookSort(state as StateSchema)).toEqual(Sort.RELEVANCE);
    // });
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            searchBook: {
                value: 'value',
            },
        };
        expect(getSearchBookValue(state as StateSchema)).toEqual('value');
    });
    // test('should return category', () => {
    //     const state: DeepPartial<StateSchema> = {
    //         searchBook: {
    //             categories: Categories.ALL,
    //         },
    //     };
    //     expect(getSearchBookValue(state as StateSchema)).toEqual(Categories.ALL);
    // });
});
