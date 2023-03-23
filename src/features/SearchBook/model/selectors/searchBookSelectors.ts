import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchBookValue = (state: StateSchema) => state.searchBook.value;
export const getSearchBookCategory = (state: StateSchema) => state.searchBook.categories;
export const getSearchBookSort = (state: StateSchema) => state.searchBook.sort;
