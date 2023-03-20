import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getBooksIsLoading = (state: StateSchema) => state.books.isLoading;
export const getBooksData = (state: StateSchema) => state.books.data?.items;
export const getBooksTotalItems = (state: StateSchema) => state.books.data?.totalItems;
